const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "../assets/antd-custom.less"), "utf8")
);
const PxtoremWebpackPlugin = require("pxtorem-webpack-plugin");
// const pxtorem = require("postcss-pxtorem");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = {
  // distDir: 'build', //自定义build地址
  //您可以根据缓存策略禁用HTML页面的etag生成。如果未指定配置，则Next将为每个页面生成etags。
  //generateEtags: false,
  compression: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret"
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
    mySecret: process.env.MY_SECRET // Pass through env variables
  },
  pageExtensions: ["mdx", "jsx", "js"], //在页面中解析页面时配置扩展名
  generateBuildId: async () => {
    // 在这里获取最新的git commit hash
    // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }
    return null;
  },

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
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        );
      }
    }
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // 让你的antd自定义有效
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (config.externals) {
      const includes = [/antd-mobile/];
      config.externals = config.externals.map(external => {
        if (typeof external !== "function") return external;
        return (ctx, req, cb) => {
          return includes.find(include =>
            req.startsWith(".")
              ? include.test(path.resolve(ctx, req))
              : include.test(req)
          )
            ? cb()
            : external(ctx, req, cb);
        };
      });
    }

    // config.plugins.push([
    //   new PxtoremWebpackPlugin({
    //     baseWidth: 750,
    //     baseDpr: 2,
    //     remUnit: 100
    //   })
    // ]);
    if (isServer) {
      const antStyles = /antd-mobile\/.*?\/style.*?/;
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
    config.module.rules.forEach(item => {
      if (item.loader && item.loader.loader) {
        item.include = [];
      }
    });
    return config;
  }
};
