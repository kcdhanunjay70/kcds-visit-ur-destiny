const fs = require("fs");
const path = require("path");
const vm = require("vm");
const express = require("express");
const { MongoClient } = require("mongodb");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mongoUri = process.env.MONGO_URI;
const databaseName = process.env.MONGO_DB_NAME || "visit_ur_destiny";

function bundledRoutes() {
  const source = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const match = source.match(/const DEFAULT_ROUTES = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error("Bundled route seed data was not found");
  return vm.runInNewContext(match[1]);
}

function clean(value, maxLength = 120) {
  return String(value || "").trim().slice(0, maxLength);
}

function validateRoute(payload) {
  const route = {
    country: clean(payload.country),
    flag: clean(payload.flag, 12),
    source: clean(payload.source),
    destination: clean(payload.destination),
    region: clean(payload.region, 60),
    style: clean(payload.style, 60),
    airline: clean(payload.airline),
    price: Number(payload.price),
    duration: Number(payload.duration),
    rating: Number(payload.rating)
  };
  if (!route.country || !route.source || !route.destination || !route.region || !route.style || !route.airline) {
    throw new Error("Country, source, destination, region, style and airline are required");
  }
  if (!Number.isFinite(route.price) || route.price < 1) throw new Error("Price must be a positive number");
  if (!Number.isFinite(route.duration) || route.duration <= 0) throw new Error("Duration must be a positive number");
  if (!Number.isFinite(route.rating) || route.rating < 1 || route.rating > 5) throw new Error("Rating must be between 1 and 5");
  return route;
}

function publicRoute(route) {
  return { ...route, id: String(route._id), _id: undefined };
}

function matchesRoute(route, query) {
  return Object.entries(query).every(([key, value]) => {
    if (key === "$or") {
      return value.some((condition) => matchesRoute(route, condition));
    }
    if (value && value.$regex) {
      const regex = value.$regex instanceof RegExp ? value.$regex : new RegExp(value.$regex, value.$options || "");
      return regex.test(String(route[key] || ""));
    }
    return route[key] === value;
  });
}

function createMemoryDatabase() {
  const data = {
    routes: [],
    searches: []
  };
  let sequence = 1;

  function collection(name) {
    const records = data[name] || (data[name] = []);
    return {
      async createIndex() {},
      async countDocuments(query = {}) {
        return records.filter((record) => matchesRoute(record, query)).length;
      },
      async insertMany(items) {
        items.forEach((item) => records.push({ ...item, _id: String(sequence++) }));
        return { insertedCount: items.length };
      },
      async insertOne(item) {
        const record = { ...item, _id: String(sequence++) };
        records.push(record);
        return { insertedId: record._id };
      },
      find(query = {}) {
        const result = records.filter((record) => matchesRoute(record, query));
        return {
          sort(sortSpec = {}) {
            const [[field, direction] = []] = Object.entries(sortSpec);
            if (field) {
              result.sort((left, right) => String(left[field] || "").localeCompare(String(right[field] || "")) * direction);
            }
            return this;
          },
          async toArray() {
            return result.map((record) => ({ ...record }));
          }
        };
      }
    };
  }

  return {
    collection,
    async command() {
      return { ok: 1 };
    }
  };
}

async function connectDatabase(options = {}) {
  if (options.client) {
    return {
      client: options.client,
      database: options.client.db(options.databaseName || databaseName),
      mode: "mongodb"
    };
  }

  if (!mongoUri) {
    console.warn("MONGO_URI is not configured. Starting with bundled in-memory route data.");
    return { client: null, database: createMemoryDatabase(), mode: "memory" };
  }

  const client = new MongoClient(mongoUri, { serverSelectionTimeoutMS: 3000 });
  try {
    await client.connect();
    return { client, database: client.db(options.databaseName || databaseName), mode: "mongodb" };
  } catch (error) {
    console.warn(`MongoDB connection failed (${error.message}). Starting with bundled in-memory route data.`);
    await client.close().catch(() => {});
    return { client: null, database: createMemoryDatabase(), mode: "memory" };
  }
}

async function createApp(options = {}) {
  const { client, database, mode } = await connectDatabase(options);
  const routes = database.collection("routes");
  const searches = database.collection("searches");

  await routes.createIndex({ country: 1, destination: 1 }, { unique: true });
  await searches.createIndex({ createdAt: -1 });
  if (await routes.countDocuments({}) === 0) {
    await routes.insertMany(bundledRoutes().map((route) => ({ ...route, createdAt: new Date() })));
  }

  const app = express();
  app.use(express.json({ limit: "50kb" }));

  app.get("/api/health", async (_request, response, next) => {
    try {
      await database.command({ ping: 1 });
      response.json({ success: true, status: "healthy", database: mode });
    } catch (error) {
      next(error);
    }
  });

  app.get("/api/routes", async (request, response, next) => {
    try {
      const query = {};
      const q = clean(request.query.q);
      const region = clean(request.query.region, 60);
      const style = clean(request.query.style, 60);
      if (region && region !== "all") query.region = region;
      if (style && style !== "all") query.style = style;
      if (q) {
        query.$or = ["country", "source", "destination", "airline"].map((field) => ({
          [field]: { $regex: q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" }
        }));
      }
      const result = await routes.find(query).sort({ country: 1 }).toArray();
      response.json({ success: true, count: result.length, routes: result.map(publicRoute) });
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/routes", async (request, response) => {
    try {
      const route = { ...validateRoute(request.body || {}), createdAt: new Date() };
      const result = await routes.insertOne(route);
      response.status(201).json({ success: true, route: publicRoute({ ...route, _id: result.insertedId }) });
    } catch (error) {
      const duplicate = error && error.code === 11000;
      response.status(duplicate ? 409 : 400).json({ success: false, message: duplicate ? "This route already exists" : error.message });
    }
  });

  app.post("/api/searches", async (request, response, next) => {
    try {
      const search = {
        source: clean(request.body?.source),
        query: clean(request.body?.query),
        region: clean(request.body?.region, 60),
        style: clean(request.body?.style, 60),
        createdAt: new Date()
      };
      const result = await searches.insertOne(search);
      response.status(201).json({ success: true, id: String(result.insertedId) });
    } catch (error) {
      next(error);
    }
  });

  app.use(express.static(root, { extensions: ["html"] }));
  app.get("*", (_request, response) => response.sendFile(path.join(root, "index.html")));
  app.use((error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ success: false, message: "Database request failed" });
  });

  return { app, client, database };
}

if (require.main === module) {
  createApp()
    .then(({ app }) => app.listen(port, () => console.log(`KCDS Visit Ur Destiny MongoDB app is running on port ${port}`)))
    .catch((error) => {
      console.error("Could not start MongoDB application:", error.message);
      process.exit(1);
    });
}

module.exports = { bundledRoutes, clean, createApp, validateRoute };
