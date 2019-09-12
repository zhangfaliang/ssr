const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const combintionRouter = require("./routes/index.js");
const ssrCache = require("./ssrCache/index.js");
const connection = require("./connect/index");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  combintionRouter({
    connection,
    server,
    router,
    app,
    handle,
    ssrCache: ssrCache(app)
  });
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
