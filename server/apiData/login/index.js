const { get } = require("lodash");
const axios = require("axios");

const indexRoute = ({ query, router, server, app, ssrCache }) => {
  router.post("/api/common/userInfo", async ctx => {
    console.log(ctx.req);
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = indexRoute;
