const withLess = require('@zeit/next-less')
module.exports = withLess({
  useFileSystemPublicRoutes: false,
  exportPathMap: function () {
    return {
      '/': { page: '/', query: { showMore: false } },
      '/about': { page: '/about' }
    }
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, options) {
    return config
  }
})
