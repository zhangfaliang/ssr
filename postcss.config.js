const pxtorem = require("postcss-pxtorem");
const autoprefixer = require("autoprefixer");
const px2rem = require("postcss-px2rem-exclude");

module.exports = {
  plugins: [
    // pxtorem({
    //   rootValue: 100,
    //   unitPrecision: 5,
    //   propList: ["*"],
    //   selectorBlackList: [/^\.nop2r/, /^\.am/],//排除antd样式
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0
    // }),
     px2rem({ remUnit: 75}),
    autoprefixer({
     
    })
  ]
};
