const withLess = require("@zeit/next-less");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = withLess((phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      useFileSystemPublicRoutes: true, // 开启前端路由
      // distDir: 'build', //自定义build地址
      //这是仅限开发的功能。如果要在生产中缓存
      //接下来介绍一些选项，这些选项可以让您控制服务器如何处置或保留在内存页面中：
      onDemandEntries: {
        // （以毫秒为单位）服务器将页面保留在缓冲区中
        maxInactiveAge: 25 * 1000,
        // （以毫秒为单位）服务器将页面保留在缓冲区中
        pagesBufferLength: 2
      },
      exportPathMap: function() {
        return {
          "/": { page: "/", query: { showMore: false } },
          "/about": { page: "/about" }
        };
      },
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]"
      },
      webpack(config, options) {
        return config;
      }
    };
  }
  return {
    useFileSystemPublicRoutes: false, // 开启前端路由
    //您可以根据缓存策略禁用HTML页面的etag生成。如果未指定配置，则Next将为每个页面生成etags。
    //generateEtags: false,
    exportPathMap: function() {
      return {
        "/": { page: "/", query: { showMore: false } },
        "/about": { page: "/about" }
      };
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    webpack(config, options) {
      return config;
    }
  };
});
