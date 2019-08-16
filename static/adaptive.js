// "use strict";

// /**
//  * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认50px, 对于iPhone的设计稿, 1rem=100px; 方便裸算rem; 有的是16px, 用浏览器默认;
//  * @param {Number} [psdWidth = 750] - 设计稿默认宽度, 以750为基准;
//  */

// var win = window;

//  win.vl = function(baseFontSize, psdWidth) {
//   var _baseFontSize = baseFontSize || 100;
//   var _psdWidth = psdWidth || 750;
//   console.log("iniet adaptive");
//   var doc = win.document;
//   var ua = navigator.userAgent;
//   var matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
//   var UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
//   var isUCHd =
//     UCversion && parseInt(UCversion[1].split(".").join(""), 10) >= 80;
//   var docEl = doc.documentElement;
//   var rate = 1;
//   if ((matches && matches[1] > 534) || isUCHd) {
//     // 有些兼容环境下, fontSize为100px的时候, 结果1rem=86px; 需要纠正viewport;
//     docEl.style.fontSize = _baseFontSize + "px";
//     var div = doc.createElement("div");
//     div.setAttribute("style", "width: 1rem;display:none");
//     docEl.appendChild(div);
//     var trueWidth = win.getComputedStyle(div).width;
//     docEl.removeChild(div);
//     // 如果1rem的真实px跟html.fontSize不符. 那么就要加一个rate缩放了;
//     if (trueWidth !== docEl.style.fontSize) {
//       var trueWidthVal = parseInt(trueWidth, 10);
//       rate = _baseFontSize / trueWidthVal;
//     }
//   }

//   var metaEl = doc.querySelector('meta[name="viewport"]');
//   if (!metaEl) {
//     metaEl = doc.createElement("meta");
//     metaEl.setAttribute("name", "viewport");
//     doc.head.appendChild(metaEl);
//   }
//   metaEl.setAttribute(
//     "content",
//     "width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"
//   );

//   // width/750*100, 为了统一rem为0.01rem = 1px
//   var setFontSize = function setFontSize() {
//     docEl.style.fontSize =
//       (_baseFontSize / _psdWidth) * docEl.clientWidth * rate + "px";
//   };
//   setFontSize();
//   console.log("res adaptive");
//   win.addEventListener("resize", setFontSize);
// };
// //https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/vl.js
// vl();

// 'use strict';

// /**
//  * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认100px;
//  * @param {Number} [fontscale = 1] - 有的业务希望能放大一定比例的字体;
//  */
// const win = window;
// export default win.flex = (baseFontSize, fontscale) => {
//   const _baseFontSize = baseFontSize || 100;
//   const _fontscale = fontscale || 1;

//   const doc = win.document;
//   const ua = navigator.userAgent;
//   const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
//   const UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
//   const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80;
//   const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
//   let dpr = win.devicePixelRatio || 1;
//   if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
//     // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
//     dpr = 1;
//   }
//   const scale = 1 / dpr;

//   let metaEl = doc.querySelector('meta[name="viewport"]');
//   if (!metaEl) {
//     metaEl = doc.createElement('meta');
//     metaEl.setAttribute('name', 'viewport');
//     doc.head.appendChild(metaEl);
//   }
//   metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`);
//   doc.documentElement.style.fontSize = `${_baseFontSize / 2 * dpr * _fontscale}px`;
// };
// flex(100, 1);

!(function(e) {
  function t(a) {
    if (i[a]) return i[a].exports;
    var n = (i[a] = { exports: {}, id: a, loaded: !1 });
    return e[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
  }
  var i = {};
  return (t.m = e), (t.c = i), (t.p = ""), t(0);
})([
  function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = window;
    (t["default"] = i.flex = function(e, t) {
      var a = e || 100,
        n = t || 1,
        r = i.document,
        o = navigator.userAgent,
        d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
        l = o.match(/U3\/((\d+|\.){5,})/i),
        c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
        p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
        s = i.devicePixelRatio || 1;
      p || (d && d[1] > 534) || c || (s = 1);
      var u = 1 / s,
        m = r.querySelector('meta[name="viewport"]');
      m ||
        ((m = r.createElement("meta")),
        m.setAttribute("name", "viewport"),
        r.head.appendChild(m)),
        m.setAttribute(
          "content",
          "width=device-width,user-scalable=no,initial-scale=" +
            u +
            ",maximum-scale=" +
            u +
            ",minimum-scale=" +
            u
        ),
        (r.documentElement.style.fontSize = (a / 2) * s * n + "px");
    }),
      (e.exports = t["default"]);
  }
]);
flex(100, 1);
