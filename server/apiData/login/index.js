const { get } = require("lodash");
const indexRoute = ({ query, router, server, app, ssrCache }) => {
  const isSomeoneUser = ({ user_name, res }) => {
    return res.some(item => get(item.user_name) === user_name);
  };
  router.post("/common/login", async ctx => {
    const res = await query("select * from user");
    //isSomeoneUser()
    ctx.body = JSON.stringify(ctx);
    let postData = ctx.request.body
    console.log(ctx.req,postData);
  });
  router.post("/common/sign", async ctx => {
    const res = await query("select * from user");
    console.log(res);
    ctx.body = res;
  });
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = indexRoute;
