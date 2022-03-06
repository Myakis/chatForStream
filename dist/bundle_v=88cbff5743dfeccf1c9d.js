(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([n.id,'.body {\r\n  display: flex;\r\n  height: 100vh;\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  font-family: "Roboto", sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  flex: 1 1 70%;\r\n  background: rgb(190, 178, 112);\r\n}\r\n\r\naside {\r\n  flex: 0 0 400px;\r\n  background: rgb(56, 118, 143);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.block {\r\n  margin-top: 20px;\r\n}\r\n.block h2 {\r\n  margin: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 2px solid rgb(132 56 125);\r\n  color: purple;\r\n  letter-spacing: 11px;\r\n}\r\n\r\n.chat {\r\n  margin: 10px 0;\r\n  flex: 1 1 auto;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n.chat__question-block {\r\n  padding: 1rem;\r\n}\r\n.chat__data {\r\n  font-size: 12px;\r\n  color: #731e74;\r\n  font-weight: 800;\r\n}\r\n.chat__question {\r\n  margin-top: 5px;\r\n  font-size: 18px;\r\n  color: #2c1338;\r\n}\r\n.form-chat {\r\n  margin-bottom: 10px;\r\n}\r\n.form-chat label {\r\n  font-size: 20px;\r\n  padding: 10px;\r\n}\r\n.form-chat textarea {\r\n  margin-top: 10px;\r\n  display: block;\r\n  width: 100%;\r\n  background: inherit;\r\n  outline: none;\r\n  border: 1px solid rgb(87, 87, 87);\r\n  font-size: 1rem;\r\n  padding: 10px;\r\n  resize: none;\r\n  height: 100px;\r\n  border-radius: 20px;\r\n  background: rgba(245, 222, 179, 0.363);\r\n}\r\n.form-chat button {\r\n  text-align: center;\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  font-size: 20px;\r\n  max-width: 200px;\r\n  width: 100%;\r\n  display: block;\r\n  margin: 20px 15px 0 auto;\r\n  outline: none;\r\n  border: 0;\r\n  background: rgba(92, 25, 25, 0.699);\r\n  border-radius: 15px;\r\n  box-shadow: 3px 4px 3px 0px #000000a6;\r\n  transition: background 0.2s ease, transform 0.08s ease-in-out, box-shadow 0.08s ease-in-out;\r\n}\r\n\r\n.form-chat button:hover {\r\n  background: rgba(92, 25, 25, 1);\r\n}\r\n.form-chat button:active {\r\n  transform: translate(1px, 5px);\r\n  box-shadow: 0 0 0 0px #000000a6;\r\n}\r\n.form-chat button:disabled {\r\n  background: rgba(128, 125, 125, 0.8);\r\n}\r\n\r\n.chat {\r\n}\r\n::-webkit-scrollbar {\r\n  width: 8px; /* ширина для вертикального скролла */\r\n  height: 4px; /* высота для горизонтального скролла */\r\n}\r\n\r\n/* ползунок скроллбара */\r\n::-webkit-scrollbar-thumb {\r\n  background-color: rgba(92, 25, 25, 0.699);\r\n  border-radius: 9em;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: rgba(92, 25, 25, 1);\r\n}\r\n',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var u=e(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),u=e.n(d),l=e(589),p=e.n(l),f=e(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class b{static create(n){return fetch("https://app-with-questions-default-rtdb.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((r=>(n.id=r.name,n))).then(m).then(b.renderList)}static renderList(){const n=g(),r=n.length?n.map(v).join(" "):"";document.querySelector(".chat").innerHTML=r}}function m(n){const r=g();r.push(n),localStorage.setItem("question",JSON.stringify(r))}function g(){return JSON.parse(localStorage.getItem("question")||"[]")}function v(n){return`\n  <div class="chat__question-block">\n      <div class="chat__data">\n      ${new Date(n.date).toLocaleDateString()}\n      ${new Date(n.date).toLocaleTimeString()}\n      </div>\n      <div class="chat__question">${n.text}</div>\n  </div>\n  \n  `}function x(n){return n.length>=10}const y=document.querySelector(".form-chat"),w=y.querySelector("textarea"),k=y.querySelector("button");window.addEventListener("load",b.renderList),y.addEventListener("submit",(function(n){if(n.preventDefault(),x(w.value)){const n={text:w.value,date:(new Date).toJSON()};k.disabled=!0,b.create(n).then((()=>{w.value="",k.disabled=!1}))}})),w.addEventListener("input",(()=>{k.disabled=!x(w.value)}))})()})();