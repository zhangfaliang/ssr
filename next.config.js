const withLess = require("@zeit/next-less");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

//您的antd-custom.less文件存在于何处
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

const commonCongig = {
  // distDir: 'build', //自定义build地址
  //您可以根据缓存策略禁用HTML页面的etag生成。如果未指定配置，则Next将为每个页面生成etags。
  //generateEtags: false,
  pageExtensions: ["mdx", "jsx", "js"], //在页面中解析页面时配置扩展名
  generateBuildId: async () => {
    // 在这里获取最新的git commit hash
    // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }
    return null;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/", query: { showMore: false } },
      "/about": { page: "/about" }
    };
  },
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]"
  // },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // 让你的antd自定义有效
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  }
};

const nextConfig = withLess(
  process.env.NODE_ENV !== "production"
    ? {
        ...commonCongig,
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
      }
    : {
        ...commonCongig,
        useFileSystemPublicRoutes: false // 开启前端路由
      }
);
module.exports = withBundleAnalyzer(nextConfig);



