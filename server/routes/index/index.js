const indexRoute = ({ router, server, app, ssrCache }) => {
  router.get("/a", async ctx => {
    // await app.render(ctx.req, ctx.res, "/a", ctx.query);
    return ssrCache({
      req: ctx.req,
      res: ctx.res,
      pagePath: "/a",
      queryParams: ctx.query
    });
    ctx.respond = false;
  });

  router.get("/b", async ctx => {
    await app.render(ctx.req, ctx.res, "/b", ctx.query);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = indexRoute;
