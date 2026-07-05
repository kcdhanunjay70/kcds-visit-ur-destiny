const test = require("node:test");
const assert = require("node:assert/strict");
const { bundledRoutes, validateRoute } = require("../server");

test("bundled MongoDB seed contains 50 routes", () => {
  const routes = bundledRoutes();
  assert.equal(routes.length, 50);
  assert.equal(routes[0].country, "Thailand");
});

test("route validation accepts valid data", () => {
  const route = validateRoute({
    country: "India", flag: "IN", source: "Hyderabad", destination: "Delhi",
    region: "Asia", style: "City", airline: "Air India", price: 8000, duration: 2, rating: 4.5
  });
  assert.equal(route.price, 8000);
});

test("route validation rejects invalid ratings", () => {
  assert.throws(() => validateRoute({
    country: "India", source: "Hyderabad", destination: "Delhi", region: "Asia",
    style: "City", airline: "Air India", price: 8000, duration: 2, rating: 7
  }), /Rating/);
});
