var { getOrderInfo, getFormData } = require("../../../utils/payment");

const userRoute = ({ router, server, app, ssrCache }) => {
  /**
   * 标准模式 - 推荐用此模式
   * 所谓标准模式，即用户下单后，会跳转到官方的收银台，在官方的收银台，会展示收款码。
   * 用户付款成功后，官方首先会异步回调商户的接口（notify），然后间隔 500ms 左右，会同步跳转到商户的页面（return）。
   */
  router.get("/payment/standard", async ctx => {
    await app.render(ctx.req, ctx.res, "/user/signin", ctx.query);
    ctx.respond = false;
  });
  /**
   * 自定义模式
   * 所谓自定义模式，即商户调用官方的支付接口，获取到收款码等信息后，自定义收银台供用户支付。
   * 用户付款成功后，官方仅会异步回调商户的接口（notify）。
   */
  router.get("/payment/custom", async ctx => {
    await app.render(ctx.req, ctx.res, "/user/login", ctx.query);
    ctx.respond = false;
  });
  /**
   * 自定义模式 - 收银台渲染逻辑
   * 在这里调用官方的接口，获取到订单信息后，商户即可渲染自己的收银台，供用户支付。
   */
  router.post("/custom-handle", (req, res) => {
    var payMode = 2;
    var payType = req.body.type;
    var payAmount = req.body.amount;

    var payData = getOrderInfo(payMode, payType, payAmount);
    var payFormData = getFormData(payData);

    request(
      {
        url: "https://www.greenyep.com/api/index",
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        form: payFormData
      },
      function(error, response, body) {
        console.info("response body:", body);
        console.info("获取到订单数据后，商户渲染自己的收银台，供用户支付");
      }
    );

    res.send("商户自定义收银台页面");
  });
  /**
   * 支付成功后同步跳转地址
   * 跳转到该页面，并不意味着用户一定支付成功了。
   * 需要拿到订单号，至后台查询该订单号是否已经接收到异步通知成功的消息
   * 如果接收到，则可以给用户显示支付成功的提示。
   */
  app.get("/return", (req, res) => {
    var ordernum = req.query.ordernum;
    console.info("同步回调处理:", ordernum);
    res.send(
      "拿到订单号，至后台查询该订单号是否已经接收到异步通知成功的消息。如果接收到，则可以给用户显示支付成功的提示。"
    );
  });
  /**
   * 获取订单信息
   * 标准模式调用
   */
  app.post("/order", (req, res) => {
    var payMode = 1;
    var payType = req.body.type;
    var payAmount = req.body.amount;
    var payData = getOrderInfo(payMode, payType, payAmount);
    res.send({
      code: 200,
      content: payData
    });
  });
  /**
   * 支付成功后异步回调接口
   * 在这个接口，执行你自己的订单支付成功逻辑，比如加积分，延长用户服务时间等
   */
  app.post("/notify", (req, res) => {
    var merchToken = ""; // 这里请填写商户 token.
    var greenpay_id = req.body.greenpay_id;
    var ordernum = req.body.ordernum;
    var amount = req.body.amount;
    var realamount = req.body.realamount;
    var account = req.body.account;
    var type = req.body.type;
    var orderuid = req.body.orderuid;
    var key = req.body.key;

    console.info("---------- received notify data ----------");
    console.info("greenpay_id:", greenpay_id);
    console.info("ordernum:", ordernum);
    console.info("amount:", amount);
    console.info("realamount:", realamount);
    console.info("account:", account);
    console.info("type:", type);
    console.info("orderuid:", orderuid);
    console.info("key:", key);

    var orderStr = md5(
      ordernum +
        orderuid +
        greenpay_id +
        amount +
        realamount +
        type +
        merchToken
    );

    console.info("local md5 str:", orderStr);

    var result = null;
    if (orderStr !== key) {
      console.info("支付失败：加密串不匹配");
      result = {
        code: 400,
        message: "faild"
      };
    } else {
      console.info(
        "支付成功：执行你自己的订单支付成功逻辑，比如加积分，延长用户服务时间等..."
      );
      result = {
        code: 200,
        message: "ok"
      };
    }
    res.end(JSON.stringify(result));
  });
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
};
module.exports = userRoute;
