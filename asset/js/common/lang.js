!function(){return function e(t,a,r){function n(s,d){if(!a[s]){if(!t[s]){var u="function"==typeof require&&require;if(!d&&u)return u(s,!0);if(o)return o(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var l=a[s]={exports:{}};t[s][0].call(l.exports,function(e){return n(t[s][1][e]||e)},l,l.exports,e,t,a,r)}return a[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}}()({1:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=(e=>{if(!e.method||!e.url)return;let t=new XMLHttpRequest;if(t.open(e.method,e.url+"?"+(e=>{if("object"!=typeof e)return"";let t=[];for(const a in e)if(e.hasOwnProperty(a)){const r=e[a];t.push(window.encodeURIComponent(a)+"="+window.encodeURIComponent(r))}return t.join("&")})(e.data)),t.timeout=3e4,"post"===e.method.toLowerCase()&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(const a in e.headers)e.headers.hasOwnProperty(a)&&t.setRequestHeader(a,e.headers[a]);e.timeout&&(t.timeout=e.timeout),e.dataType&&(t.responseType=e.dataType),t.addEventListener("readystatechange",()=>{4===t.readyState&&200===t.status&&t.response?e.success&&e.success(t.response):t.status>400&&e.error(t.status)}),e.error&&(t.addEventListener("error",t=>{e.error(t)}),t.addEventListener("timeout",t=>{e.error(t)})),t.send(e.data?e.data:null)})},{}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r,n=e("./ajax.js"),o=(r=n)&&r.__esModule?r:{default:r};const s={},d=(e,t)=>{let a=document.querySelectorAll("[data-lang]"),r=0,n=window.setInterval(o=>{if(r<a.length){if(a[r].getAttribute("data-lang-sign")!==e){let t=null;if(a[r].getAttribute("data-lang").split(".").forEach(a=>{t=null===t?s[e][a]:t[a]}),a[r].hasAttribute("data-lang-params")){let e=a[r].getAttribute("data-lang-params");a[r].hasAttribute("data-lang-encoded")&&(e=window.decodeURI(e));try{(e=JSON.parse(e)).length?e.forEach(e=>{t=a[r].hasAttribute("data-lang-encoded")?t.replace("%s",window.decodeURI(e)):t.replace("%s",e)}):isNaN(e)||(t=a[r].hasAttribute("data-lang-encoded")?t.replace("%s",window.decodeURI(e)):t.replace("%s",e))}catch(n){t=a[r].hasAttribute("data-lang-encoded")?t.replace("%s",window.decodeURI(e)):t.replace("%s",e)}}a[r].hasAttribute("data-lang-titled")?a[r].title=t:a[r].hasAttribute("data-lang-placeholdered")?a[r].placeholder=t:a[r].innerHTML=`<span>${t}</span>`,a[r].setAttribute("data-lang-sign",e)}r+=1}else window.clearInterval(n),t&&t(s[e])},8)};a.default=((e,t,a=!0)=>{"zh-cn"!==e&&"en"!==e||(s[e]?a?d(e,t):t&&t(s[e]):(0,o.default)({url:`/asset/lang/${e}.json`,method:"get",dataType:"json",success(r){s[e]=r,a?d(e,t):t&&t(s[e])}}))})},{"./ajax.js":1}]},{},[2]);