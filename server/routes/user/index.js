const userRoute = ({ router, server, app, ssrCache }) => {
    router.get("/user/signin/index", async ctx => {
      await app.render(ctx.req, ctx.res, "/user/signin", ctx.query);
      ctx.respond = false;
    });
    router.get("/user/login/index", async ctx => {
      await app.render(ctx.req, ctx.res, "/user/login", ctx.query);
      ctx.respond = false;
    });
    router.get("/user/changePWD/index", async ctx => {
      await app.render(ctx.req, ctx.res, "/user/changePWD", ctx.query);
      ctx.respond = false;
    });
  
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });
  };
  module.exports = userRoute;
  