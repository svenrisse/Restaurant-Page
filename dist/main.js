(()=>{"use strict";var e={372:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    color: black;\n    background-color: #e4e4e7;\n}\n\n#content {\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n.title {\n    font-weight: 700;\n    font-size: 25px;\n    text-shadow: 1px 1px 15px #65a30d;\n}\n\n.description {\n    padding-left: 5vw;\n    padding-right: 5vw;\n}\n\n.navBar {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 0px 50px;\n}\n\n.navBar button {\n    width: 5vw;\n    height: 4vh;\n    border-radius: 15px;\n    border: 2px solid #65a30d;\n}\n.navBar button:hover {\n    background-color: #65a30d;\n}\n.navBar button:active {\n    background-color: #e4e4e7;\n}\n\n.image {\n    height: 100vh;\n    width: 55vw;\n    grid-area: 1 / 1 / span 4;\n    box-shadow: 4px 1px 10px #65a30d;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"2a370d044fd1fad27ce3.jpg";var t=n(379),r=n.n(t),a=n(795),o=n.n(a),i=n(569),s=n.n(i),c=n(565),d=n.n(c),l=n(216),p=n.n(l),u=n(589),f=n.n(u),h=n(372),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(){const t=document.querySelector("#content"),n=new Image;n.src=e,n.classList.add("image"),t.appendChild(n);const r=document.createElement("div");r.classList.add("title"),r.textContent="Welcome to The Cal Zone",t.appendChild(r);const a=document.createElement("div");a.classList.add("navBar");const o=document.createElement("button");o.classList.add("pizzaButton"),o.textContent="Pizza",a.appendChild(o);const i=document.createElement("button");i.classList.add("pastaButton"),i.textContent="Pasta",a.appendChild(i);const s=document.createElement("button");s.classList.add("drinksButton"),s.textContent="Drinks",a.appendChild(s),t.appendChild(a);const c=document.createElement("div");c.classList.add("description"),c.textContent="The Cal Zone combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original strawberry-pizza, we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!",t.appendChild(c);const d=document.createElement("div");d.classList.add("contact"),d.textContent="Want to reserve a table or have a question? Just give us a call at: 0123 45678900",t.appendChild(d)}()})()})();