const commonConfig = require("./common.config.js");
const dotEnvResult = require("dotenv").config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}
module.exports = {
  ...commonConfig,
  //您可能只需要在生产中添加assetPrefix。
  env: {
    BACKEND_URL: "https://api.example.com",
    TEST: process.env.TEST
  },
  //如果您的CDN位于单独的域中，并且您希望使用CORS感知请求来请求资产，则可以为其设置配置选项。
  crossOrigin: "anonymous",
  useFileSystemPublicRoutes: false // 开启前端路由
};
