const withLess = require("@zeit/next-less");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const proConfig = require("./nextConfig/pro.config.js");
const devConfig = require("./nextConfig/dev.config.js");
const withLessExcludeAntd = require("./next-less.config.js")


const nextConfig = withLessExcludeAntd(
  process.env.NODE_ENV !== "production" ? devConfig : proConfig
);
module.exports = withBundleAnalyzer(nextConfig);
