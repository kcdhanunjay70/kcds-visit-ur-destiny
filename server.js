const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 3000;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function resolveRequestPath(url) {
  const parsedUrl = new URL(url, `http://localhost:${port}`);
  const requestedPath = decodeURIComponent(parsedUrl.pathname);
  const cleanPath = requestedPath === "/" ? "/index.html" : requestedPath;
  const filePath = path.normalize(path.join(root, cleanPath));

  if (!filePath.startsWith(root)) {
    return path.join(root, "index.html");
  }

  return filePath;
}

const server = http.createServer((request, response) => {
  let filePath = resolveRequestPath(request.url);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      filePath = path.join(root, "index.html");
      fs.readFile(filePath, (fallbackError, fallbackContent) => {
        if (fallbackError) {
          response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Site is unavailable.");
          return;
        }

        response.writeHead(200, { "Content-Type": contentTypes[".html"] });
        response.end(fallbackContent);
      });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream"
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`KCDS Visit Ur Destiny is running on port ${port}`);
});
