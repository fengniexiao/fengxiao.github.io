!function(){return function e(t,r,n){function o(u,i){if(!r[u]){if(!t[u]){var s="function"==typeof require&&require;if(!i&&s)return s(u,!0);if(a)return a(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[u]={exports:{}};t[u][0].call(l.exports,function(e){return o(t[u][1][e]||e)},l,l.exports,e,t,r,n)}return r[u].exports}for(var a="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}}()({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=(e=>{if(!e.method||!e.url)return;let t=new XMLHttpRequest;if(t.open(e.method,e.url+"?"+(e=>{if("object"!=typeof e)return"";let t=[];for(const r in e)if(e.hasOwnProperty(r)){const n=e[r];t.push(window.encodeURIComponent(r)+"="+window.encodeURIComponent(n))}return t.join("&")})(e.data)),t.timeout=3e4,"post"===e.method.toLowerCase()&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(const r in e.headers)e.headers.hasOwnProperty(r)&&t.setRequestHeader(r,e.headers[r]);e.timeout&&(t.timeout=e.timeout),e.dataType&&(t.responseType=e.dataType),t.addEventListener("readystatechange",()=>{4===t.readyState&&200===t.status&&t.response?e.success&&e.success(t.response):t.status>400&&e.error(t.status)}),e.error&&(t.addEventListener("error",t=>{e.error(t)}),t.addEventListener("timeout",t=>{e.error(t)})),t.send(e.data?e.data:null)})},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=((e,t,r,n=!1,o=5e3)=>{let a=document.createElement("script"),u="",i=null,s=null,c=!0,l=!0;if(t)for(const e in t)if(t.hasOwnProperty(e)){const r=t[e];u+=""===u?"?"+e+"="+r:"&"+e+"="+r,/(jsonp|callback)/.test(e.toLowerCase())&&(i=r)}i&&(window[i]=function(e){s=e}),a.onload=function(){s&&l&&(c=!1,r&&r(s)),n&&a.remove()},a.onerror=function(e){l&&(c=!1,r&&r(e)),n&&a.remove()},window.setTimeout(e=>{c&&(l=!1,r&&r(null))},o),a.src=e+u,document.head.appendChild(a)})},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){let r=document.querySelector(`.p-${e}`);r?(t&&t(r),r.classList.remove("HIDE")):(0,a.default)({url:`/asset/part/${e}.html`,method:"get",dataType:"document",success(e){t&&t(e.body.firstElementChild)}})};var n,o=e("./ajax.js"),a=(n=o)&&n.__esModule?n:{default:n}},{"./ajax.js":1}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=o(e("./fetch.js"));function o(e){return e&&e.__esModule?e:{default:e}}(0,o(e("../plugin/md5.min.js")).default)();const a=/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;r.default={delay:(e,t)=>{window.setTimeout(t,e)},run:(e,t,r)=>{e(e=>{t&&(a.test(window.navigator.userAgent)?t.mobile&&t.mobile(r):t.desktop&&t.desktop(r))})},runOnMobile:e=>{a.test(window.navigator.userAgent)&&e&&e(window.navigator.userAgent)},runOnDesktop:e=>{a.test(window.navigator.userAgent)||e&&e(window.navigator.userAgent)},getPageKey:e=>{let t="",r=window.location.pathname;if(/^\/(archives|categories|tags)\//.test(r))t="archive";else if(/^(\/|\/index.html)$/.test(r))t="home";else{let e=r.match(/^\/([a-zA-Z0-9_\-]+)/);2===e.length&&(t=e[1])}return t},forEach:(e,t)=>{if("object"==typeof e&&e.length)for(let r=0;r<e.length&&(!t||!t(e[r],r));r++);},forIn:(e,t)=>{if("object"==typeof e)for(const r in e)if(e.hasOwnProperty(r)&&t&&t(e[r],r))break},layoutParts:e=>{let t=document.querySelector('meta[name="layout-parts"]');if(t){let r=t.getAttribute("content");try{e&&e(JSON.parse(r))}catch(t){e&&e([])}}},decodePass:function(e,t){if(isNaN(t))return{appid:"",appkey:""};let r="",n=e.split(":");if(n[1]){let e=n[1].substr(0,parseInt(n[0])).split(""),t=n[1].substr(parseInt(n[0])).split("");for(let o=0;o<n[1].length;o++)r+=o%2==0?e.shift():t.shift()}return{appid:r.substr(0,t),appkey:r.substr(t)}},baiduTranslate:function(e,t,r,o){if("function"!=typeof o)return!1;if("string"!=typeof t||"string"!=typeof r)return o({error:"PARAMS ERROR / 参数错误"});var a="//api.fanyi.baidu.com/api/trans/vip/translate";window.location.protocol.includes("https")&&(a="//fanyi-api.baidu.com/api/trans/vip/translate");var u=Date.now(),i=md5(e.appid+t+u+e.appkey);0===t.length?o({error:'<p class="error">EMPTY QUERY / 空查询</p>'}):t.length<100?(0,n.default)(a,{q:t,appid:e.appid,salt:u,from:"auto",to:r,sign:i,callback:"baiduTranslate"+u},e=>{e&&e.trans_result?o({result:'<p class="result">RESULT / 翻译结果：</p><p class="content">'+e.trans_result[0].dst+"</p>"}):o({error:'<p class="error">WRONG QUERY / 错查询</p>'})},!0):o({error:'<p class="error">HUGE QUERY / 巨查询</p>'})},getChromeVersion:e=>{if(!/Chrome/i.test(window.navigator.userAgent))return 0;{let e=window.navigator.userAgent.match(/Chrome\/([0-9.]+)/i);if(e.length>1)return parseInt(e[1])}}}},{"../plugin/md5.min.js":6,"./fetch.js":2}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=a(e("../common/part.js")),o=a(e("../common/util.js"));function a(e){return e&&e.__esModule?e:{default:e}}let u="menus",i=null;r.default={tag:u,init:(e,t)=>{(0,n.default)(u,e=>{i=e,document.querySelector(u)&&document.querySelector(u).replaceWith(i),t&&t(i)})},update:e=>{if(!i)return;let t=i.querySelector("[data-menu-key].active");t&&t.classList.remove("active");let r=o.default.getPageKey();o.default.forEach(i.querySelectorAll("[data-menu-key]"),e=>{if(r===e.getAttribute("data-menu-key"))return e.classList.add("active"),!0})}}},{"../common/part.js":3,"../common/util.js":4}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=(e=>{!function(e){function t(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(e,r,n,o,a,u){return t(function(e,t){return e<<t|e>>>32-t}(t(t(r,e),t(o,u)),a),n)}function n(e,t,n,o,a,u,i){return r(t&n|~t&o,e,t,a,u,i)}function o(e,t,n,o,a,u,i){return r(t&o|n&~o,e,t,a,u,i)}function a(e,t,n,o,a,u,i){return r(t^n^o,e,t,a,u,i)}function u(e,t,n,o,a,u,i){return r(n^(t|~o),e,t,a,u,i)}function i(e,r){e[r>>5]|=128<<r%32,e[14+(r+64>>>9<<4)]=r;var i,s,c,l,d,f=1732584193,p=-271733879,m=-1732584194,h=271733878;for(i=0;i<e.length;i+=16)s=f,c=p,l=m,d=h,p=u(p=u(p=u(p=u(p=a(p=a(p=a(p=a(p=o(p=o(p=o(p=o(p=n(p=n(p=n(p=n(p,m=n(m,h=n(h,f=n(f,p,m,h,e[i],7,-680876936),p,m,e[i+1],12,-389564586),f,p,e[i+2],17,606105819),h,f,e[i+3],22,-1044525330),m=n(m,h=n(h,f=n(f,p,m,h,e[i+4],7,-176418897),p,m,e[i+5],12,1200080426),f,p,e[i+6],17,-1473231341),h,f,e[i+7],22,-45705983),m=n(m,h=n(h,f=n(f,p,m,h,e[i+8],7,1770035416),p,m,e[i+9],12,-1958414417),f,p,e[i+10],17,-42063),h,f,e[i+11],22,-1990404162),m=n(m,h=n(h,f=n(f,p,m,h,e[i+12],7,1804603682),p,m,e[i+13],12,-40341101),f,p,e[i+14],17,-1502002290),h,f,e[i+15],22,1236535329),m=o(m,h=o(h,f=o(f,p,m,h,e[i+1],5,-165796510),p,m,e[i+6],9,-1069501632),f,p,e[i+11],14,643717713),h,f,e[i],20,-373897302),m=o(m,h=o(h,f=o(f,p,m,h,e[i+5],5,-701558691),p,m,e[i+10],9,38016083),f,p,e[i+15],14,-660478335),h,f,e[i+4],20,-405537848),m=o(m,h=o(h,f=o(f,p,m,h,e[i+9],5,568446438),p,m,e[i+14],9,-1019803690),f,p,e[i+3],14,-187363961),h,f,e[i+8],20,1163531501),m=o(m,h=o(h,f=o(f,p,m,h,e[i+13],5,-1444681467),p,m,e[i+2],9,-51403784),f,p,e[i+7],14,1735328473),h,f,e[i+12],20,-1926607734),m=a(m,h=a(h,f=a(f,p,m,h,e[i+5],4,-378558),p,m,e[i+8],11,-2022574463),f,p,e[i+11],16,1839030562),h,f,e[i+14],23,-35309556),m=a(m,h=a(h,f=a(f,p,m,h,e[i+1],4,-1530992060),p,m,e[i+4],11,1272893353),f,p,e[i+7],16,-155497632),h,f,e[i+10],23,-1094730640),m=a(m,h=a(h,f=a(f,p,m,h,e[i+13],4,681279174),p,m,e[i],11,-358537222),f,p,e[i+3],16,-722521979),h,f,e[i+6],23,76029189),m=a(m,h=a(h,f=a(f,p,m,h,e[i+9],4,-640364487),p,m,e[i+12],11,-421815835),f,p,e[i+15],16,530742520),h,f,e[i+2],23,-995338651),m=u(m,h=u(h,f=u(f,p,m,h,e[i],6,-198630844),p,m,e[i+7],10,1126891415),f,p,e[i+14],15,-1416354905),h,f,e[i+5],21,-57434055),m=u(m,h=u(h,f=u(f,p,m,h,e[i+12],6,1700485571),p,m,e[i+3],10,-1894986606),f,p,e[i+10],15,-1051523),h,f,e[i+1],21,-2054922799),m=u(m,h=u(h,f=u(f,p,m,h,e[i+8],6,1873313359),p,m,e[i+15],10,-30611744),f,p,e[i+6],15,-1560198380),h,f,e[i+13],21,1309151649),m=u(m,h=u(h,f=u(f,p,m,h,e[i+4],6,-145523070),p,m,e[i+11],10,-1120210379),f,p,e[i+2],15,718787259),h,f,e[i+9],21,-343485551),f=t(f,s),p=t(p,c),m=t(m,l),h=t(h,d);return[f,p,m,h]}function s(e){var t,r="",n=32*e.length;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function c(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)r[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return r}function l(e){var t,r,n="";for(r=0;r<e.length;r+=1)t=e.charCodeAt(r),n+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return n}function d(e){return unescape(encodeURIComponent(e))}function f(e){return function(e){return s(i(c(e),8*e.length))}(d(e))}function p(e,t){return function(e,t){var r,n,o=c(e),a=[],u=[];for(a[15]=u[15]=void 0,o.length>16&&(o=i(o,8*e.length)),r=0;r<16;r+=1)a[r]=909522486^o[r],u[r]=1549556828^o[r];return n=i(a.concat(c(t)),512+8*t.length),s(i(u.concat(n),640))}(d(e),d(t))}window.md5=function(e,t,r){return t?r?p(t,e):function(e,t){return l(p(e,t))}(t,e):r?f(e):function(e){return l(f(e))}(e)}}()})},{}]},{},[5]);