const pxtorem = require("postcss-pxtorem");
module.exports = {
  plugins: [
    pxtorem({
      rootValue: 100,//根元素字体大小。
      unitPrecision: 5,//允许REM单位增长的十进制数。
      propList: ["*"],//可以从px更改为rem的属性
      //selectorBlackList: [/^\.nop2r/, /^\.am/],//排除antd样式
      replace: true,//替换包含rems的规则，而不是添加回退。
      mediaQuery: true,//允许在媒体查询中转换px。
      minPixelValue: 0//设置要替换的最小像素值。
    })
  ]
  }
  