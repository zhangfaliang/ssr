const commonConfig = require("./common.config.js");

module.exports = {
  ...commonConfig,
  /* development only config options here */
  useFileSystemPublicRoutes: true, // 开启前端路由
  //这是仅限开发的功能。如果要在生产中缓存
  //接下来介绍一些选项，这些选项可以让您控制服务器如何处置或保留在内存页面中：
  onDemandEntries: {
    // （以毫秒为单位）服务器将页面保留在缓冲区中
    maxInactiveAge: 60 * 1000,
    // （以毫秒为单位）服务器将页面保留在缓冲区中
    pagesBufferLength: 1000
  }
};
