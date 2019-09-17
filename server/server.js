const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const combintionRouter = require("./routes/index.js");
const ssrCache = require("./ssrCache/index.js");
const query = require("./connect/index");
const apiRouter = require("./apiData/index");
const proxy = require('koa-proxies')
const httpsProxyAgent = require('https-proxy-agent')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(proxy('/api', {
    target: 'http://localhost:5000',    
    changeOrigin: true,
    rewrite: path => path.replace(/\/api/, ''),
    logs: true,
    //pathRewrite
  }))
  combintionRouter({
    server,
    router,
    app,
    handle,
    ssrCache: ssrCache(app)
  });
  apiRouter({
    query,
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
