const withLess = require("@zeit/next-less");
module.exports = withLess({
  useFileSystemPublicRoutes: process.env.NODE_ENV === 'development', // 开启前端路由
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
});
