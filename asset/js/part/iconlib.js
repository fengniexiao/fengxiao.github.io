!function(){return function e(t,r,o){function n(s,i){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!i&&u)return u(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[s]={exports:{}};t[s][0].call(d.exports,function(e){return n(t[s][1][e]||e)},d,d.exports,e,t,r,o)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}}()({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=(e=>{if(!e.method||!e.url)return;let t=new XMLHttpRequest;if(t.open(e.method,e.url+"?"+(e=>{if("object"!=typeof e)return"";let t=[];for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];t.push(window.encodeURIComponent(r)+"="+window.encodeURIComponent(o))}return t.join("&")})(e.data)),t.timeout=3e4,"post"===e.method.toLowerCase()&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(const r in e.headers)e.headers.hasOwnProperty(r)&&t.setRequestHeader(r,e.headers[r]);e.timeout&&(t.timeout=e.timeout),e.dataType&&(t.responseType=e.dataType),t.addEventListener("readystatechange",()=>{4===t.readyState&&200===t.status&&t.response?e.success&&e.success(t.response):t.status>400&&e.error(t.status)}),e.error&&(t.addEventListener("error",t=>{e.error(t)}),t.addEventListener("timeout",t=>{e.error(t)})),t.send(e.data?e.data:null)})},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){let r=document.querySelector(`.p-${e}`);r?(t&&t(r),r.classList.remove("HIDE")):(0,a.default)({url:`/asset/part/${e}.html`,method:"get",dataType:"document",success(e){t&&t(e.body.firstElementChild)}})};var o,n=e("./ajax.js"),a=(o=n)&&o.__esModule?o:{default:o}},{"./ajax.js":1}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(e("../common/part.js"));n(e("../common/ajax.js"));function n(e){return e&&e.__esModule?e:{default:e}}let a="iconlib",s=null;r.default={tag:a,init:(e,t)=>{(0,o.default)(a,r=>{if(s=r,document.querySelector(a)&&document.querySelector(a).replaceWith(s),e&&e.readme){let t=(new DOMParser).parseFromString(e.readme,"text/html");t.querySelectorAll("a[aria-hidden]").forEach(e=>{e.remove()}),t.querySelectorAll("a:not([aria-hidden])").forEach(e=>{e.target="_blank"});let r=s.querySelector(".p-iconlib-readme"),o=s.querySelector(".p-iconlib-more");o.onclick=(e=>{r.classList.contains("active")?r.classList.remove("active"):r.classList.add("active")}),r.insertBefore(t.body.firstElementChild,o),s.querySelector(".p-iconlib-iframe").src="//ma-jinyao.cn/icon-lib/"}t&&t(s)})}}},{"../common/ajax.js":1,"../common/part.js":2}]},{},[3]);