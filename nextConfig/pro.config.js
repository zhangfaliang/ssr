const commonConfig = require("./common.config.js");
const dotEnvResult = require("dotenv").config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}
module.exports = {
  ...commonConfig,
  //您可能只需要在生产中添加assetPrefix。
  env: {
    TEST: process.env.TEST,
    HOST: "http://localhost:3000",
    API_ENDPOINT:"http://localhost:5000",
    STATIC:'/static',
    ICON_FONT:'/icon-font'
  },
  //如果您的CDN位于单独的域中，并且您希望使用CORS感知请求来请求资产，则可以为其设置配置选项。
  crossOrigin: "anonymous",
  useFileSystemPublicRoutes: true // 开启前端路由
};
