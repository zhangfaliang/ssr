const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const proConfig = require("./nextConfig/pro.config.js");
const devConfig = require("./nextConfig/dev.config.js");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const config = process.env.NODE_ENV !== "production" ? devConfig : proConfig;
module.exports = withPlugins([withCss, withLess, withBundleAnalyzer], config);
