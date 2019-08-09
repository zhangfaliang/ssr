const dynamicRoute = ({ router, server, app, ssrCache }) => {
  router.get("/dynamic", async ctx => {
    await app.render(ctx.req, ctx.res, "/dynamic", ctx.query);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = dynamicRoute;
