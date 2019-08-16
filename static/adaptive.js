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

(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
