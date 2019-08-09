const aboutRoute = ({ router, server, app }) => {
  router.get("/about", async ctx => {
    await app.render(ctx.req, ctx.res, "/about", ctx.query);
    ctx.respond = false;
  });
  router.get("/helloUA", async ctx => {
    await app.render(ctx.req, ctx.res, "/helloUA", ctx.query);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = aboutRoute;
