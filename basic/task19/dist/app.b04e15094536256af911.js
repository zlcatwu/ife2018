!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=[{product:"手机",region:"华东",sale:[120,100,140,160,180,185,190,210,230,245,255,270]},{product:"手机",region:"华北",sale:[80,70,90,110,130,145,150,160,170,185,190,200]},{product:"手机",region:"华南",sale:[220,200,240,250,260,270,280,295,310,335,355,380]},{product:"笔记本",region:"华东",sale:[50,60,80,110,30,20,70,30,420,30,20,20]},{product:"笔记本",region:"华北",sale:[30,35,50,70,20,15,30,50,710,130,20,20]},{product:"笔记本",region:"华南",sale:[80,120,130,140,70,75,120,90,550,120,110,100]},{product:"智能音箱",region:"华东",sale:[10,30,4,5,6,5,4,5,6,5,5,25]},{product:"智能音箱",region:"华北",sale:[15,50,15,15,12,11,11,12,12,14,12,40]},{product:"智能音箱",region:"华南",sale:[10,40,10,6,5,6,8,6,6,6,7,26]}];let o=null,i=!1;function c({regions:t,products:e}){i||function(){const t=localStorage.getItem("data");o=null===t?r:JSON.parse(t)}();let n=o.filter(e=>-1!==t.indexOf(e.region));return n=n.filter(t=>-1!==e.indexOf(t.product))}const a=document.querySelector("#bar-wrapper");function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function s(t,e,{color:n,width:r}){const o=u("line");o.setAttribute("x1",t.x),o.setAttribute("y1",t.y),o.setAttribute("x2",e.x),o.setAttribute("y2",e.y),o.setAttribute("stroke",n),o.setAttribute("stroke-width",r),a.appendChild(o)}function l({body:t,product:e,region:n}){const r=Math.floor(200/12),o=200/function(t){let e=0;return t.forEach(t=>{t>e&&(e=t)}),e}(t);for(;a.firstChild;)a.removeChild(a.firstChild);s({x:50,y:250},{x:250,y:250},{color:"#000",width:1}),s({x:50,y:50},{x:50,y:250},{color:"#000",width:1}),t.forEach((t,e)=>{!function({x:t,y:e,width:n,height:r,color:o,margin:i}){const c=u("rect");n-=2*i,c.setAttribute("width",n),c.setAttribute("height",r),c.setAttribute("x",t-n/2),c.setAttribute("y",e-r),c.setAttribute("fill",o),a.appendChild(c)}({x:50+e*r+r/2,y:250,width:r,height:o*t,color:"#f00",margin:2})})}const d=document.querySelector("#canvas").getContext("2d"),f=300,p=300,h=200,g=200,m=2.5,b=2,v=g/12,y=Math.floor((f-h)/2),x=Math.floor((p-g)/2);function w(t){let e=0;for(const n of t)n>e&&(e=n);return e}function E({lengthX:t,lengthY:e,lineWidth:n=1}){d.save(),d.lineWidth=n,d.beginPath(),d.moveTo(0,0),d.lineTo(t,0),d.moveTo(0,0),d.lineTo(0,-e),d.stroke(),d.restore()}function k({x:t,y:e,radius:n}){d.save(),d.beginPath(),d.arc(t,e,n,0,2*Math.PI),d.fill(),d.restore()}function C({data:t,param:e,lineMargin:n,radius:r,color:o}){d.save(),d.fillStyle=o;let i=0;for(const c of t){k({x:i+=n,y:-(c*e),radius:r,color:o})}d.restore()}function A({data:t,param:e,lineMargin:n,color:r,lineWidth:o=1}){d.save(),d.lineWidth=o,d.lineJoin="round",d.fillStyle=r,d.strokeStyle=r;let i=0;d.beginPath();for(let r=0;r<t.length;r++){const o=t[r];i+=n;const c=o*e;0===r?d.moveTo(i,-c):d.lineTo(i,-c)}d.stroke(),d.restore()}function S(){d.save(),d.fillStyle="#fff",d.fillRect(0,0,p,f),d.restore()}const O=document.querySelector("#table-wrapper");function L(){const t=_(),e=D(),n=c({regions:t,products:e}),{header:r,body:o}=function(t,{regions:e,products:n}){const r=["1","2","3","4","5","6","7","8","9","10","11","12"],o=[];1===n.length||1!==e.length?(r.unshift("地区"),r.unshift("商品"),t.forEach(t=>{const e=[];e.push(t.product),e.push(t.region),t.sale.forEach(t=>{e.push(t)}),o.push({data:e,region:t.region,product:t.product})})):1===region.length&&(r.unshift("商品"),r.unshift("地区"),t.forEach(t=>{const e=[];e.push(t.region),e.push(t.product),t.sale.forEach(t=>{e.push(t)}),o.push({data:e,region:t.region,product:t.product})}));return{header:r,body:o}}(n,{regions:t,products:e}),i=($||document.addEventListener("click",function(t){N()}),document.createElement("table")),a=function(t,e){const n=document.createElement("tbody"),r=document.createElement("tr");t.forEach(t=>{const e=q("th",t);r.appendChild(e)}),n.appendChild(r);let o="",i=null;return e.forEach(t=>{const e=document.createElement("tr");e.setAttribute("data-region",t.region),e.setAttribute("data-product",t.product),t.data.forEach((t,n)=>{if(0===n)if(t!==o){const n=q("td",t);o=t,(i=n).setAttribute("rowspan","1"),e.appendChild(n)}else i.setAttribute("rowspan",parseInt(i.getAttribute("rowspan"))+1);else{const r=q("td",t);n>1&&r.setAttribute("data-month",n-1),e.appendChild(r)}}),n.appendChild(e)}),n}(r,o);a.addEventListener("mouseover",R),a.addEventListener("mouseout",P),a.addEventListener("click",U),i.appendChild(a),function(){for(;O.firstChild;)O.removeChild(O.firstChild)}(),O.appendChild(i)}let M=0,T=null;function j(t){const e=document.createElement("button");return e.innerHTML=t,e}function U(t){N(),t.stopPropagation();const e=t.target;if("TD"!==e.tagName||"INPUT"===e.firstChild.tagName)return;const n=e.parentNode,r=n.getAttribute("data-region"),o=n.getAttribute("data-product"),i=e.getAttribute("data-month"),c=document.createElement("input");for(T=e,M=e.innerHTML,c.value=M,c.addEventListener("keyup",function(t){switch(t.code){case"Escape":N();break;case"Enter":I({region:r,product:o,month:i,value:c.value})}});e.firstChild;)e.removeChild(e.firstChild);const a=j("确定");a.addEventListener("click",function(t){t.stopPropagation(),I({region:r,product:o,month:i,value:c.value})});const u=j("取消");u.addEventListener("click",function(t){t.stopPropagation(),N()}),e.appendChild(c),e.appendChild(a),e.appendChild(u),c.focus()}function N(){if(null!==T){for(;T.firstChild;)T.removeChild(T.firstChild);T.innerHTML=M,T=null,M=0}}function I({region:t,product:e,month:n,value:r}){isNaN(r)?alert("数值必须为数字"):(function({region:t,product:e,month:n,value:r}){c({regions:t,products:e})[0].sale[n-1]=r,localStorage.setItem("data",JSON.stringify(o))}({region:t,product:e,month:n,value:r=parseInt(r)}),M=r,N())}function R(t){const e=t.target;if("TD"!==e.tagName)return;const n=e.parentNode,r=c({regions:n.getAttribute("data-region"),products:n.getAttribute("data-product")})[0];l({region:r.region,product:r.product,body:r.sale}),function({body:t,product:e,region:n,color:r="#000"}){const o=w(t),i=h/o;d.save(),S(),d.translate(x,y+h),E({lengthX:g,lengthY:h}),C({data:t,param:i,lineMargin:v,radius:m,color:r}),A({data:t,param:i,lineMargin:v,color:r,lineWidth:b}),d.restore()}({region:r.region,product:r.product,body:r.sale})}function P(){!function(t){const e=["#f00","#0f0","#00f","#0ff","#f0f","#ff0","#aaf","#faa","#afa"];d.save(),S();let n=0;t.forEach((t,e)=>{const r=w(t.body);r>n&&(n=r)});const r=h/n;d.translate(x,y+h),E({lengthX:g,lengthY:h}),t.forEach((t,n)=>{C({data:t.body,param:r,lineMargin:v,radius:m,color:e[n]}),A({data:t.body,param:r,lineMargin:v,color:e[n],lineWidth:b})}),d.restore()}(c({regions:_(),products:D()}).map(t=>({region:t.region,product:t.product,body:t.sale})))}let $=!1;function q(t,e){const n=document.createElement(t);return n.innerHTML=e,n}const B=["华东","华南","华北"],H=["手机","笔记本","智能音箱"],J=document.querySelector("#region-wrapper"),W=document.querySelector("#product-wrapper");function _(){return Y(J).filter(t=>t.checked).map(t=>t.value)}function D(){return Y(W).filter(t=>t.checked).map(t=>t.value)}function X(t,e){return[function(t,e){const n=document.createElement("input");return n.type="checkbox",n.id=t,n.value=e,n}(t,e),function(t,e){const n=document.createElement("label");return n.innerHTML=e,n.setAttribute("for",t),n}(t,e)]}function Y(t){return[...t.querySelectorAll('input[type="checkbox"]')].filter(t=>"false"===t.getAttribute("data-all"))}function F(t,e,n){const[r,o]=X(`${e}-all`,"全选");r.setAttribute("data-all",!0),r.checked=!0,t.appendChild(r),t.appendChild(o),n.forEach((n,r)=>{const[o,i]=X(`${e}-${r}`,n);o.checked=!0,o.setAttribute("data-all",!1),t.appendChild(o),t.appendChild(i)}),t.addEventListener("change",function(e){const n=e.target;if("INPUT"!==n.tagName&&"checkbox"===n.type)return;n.checked=!n.checked;let o=Y(t);if("true"===n.getAttribute("data-all")){const t=o.filter(t=>!t.checked);t.length&&(n.checked=!0,t.forEach(t=>{t.checked=!0}))}else{const t=o.filter(t=>!t.checked);1!==t.length||n.checked?0===t.length?(n.checked=!1,r.checked=!1):t.length===o.length-1&&n.checked||(n.checked=!n.checked):(n.checked=!0,r.checked=!0)}const i=Y(J).filter(t=>t.checked).map(t=>t.id.slice(t.id.indexOf("-")+1)),c=Y(W).filter(t=>t.checked).map(t=>t.id.slice(t.id.indexOf("-")+1));!function({regions:t,products:e}){let n="";t&&(n+=`regions=${t}`),e&&(t&&(n+="&"),n+=`products=${e}`),location.hash=n}({regions:i.join(","),products:c.join(",")}),L()})}n(5);F(J,"region",B),F(W,"product",H),function(){const{regions:t,products:e}=function(){let t=location.hash;const e=(t=t.slice(1)).split("&"),n=e.filter(t=>-1!==t.indexOf("region")),r=e.filter(t=>-1!==t.indexOf("product")),o={};if(n.length){const t=n[0];o.regions=t.slice(t.indexOf("=")+1)}if(r.length){const t=r[0];o.products=t.slice(t.indexOf("=")+1)}return o}();if(void 0===t&&void 0===e)return;const n=t.split(",").map(t=>`region-${t}`),r=e.split(",").map(t=>`product-${t}`),o=document.querySelector("#region-all"),i=document.querySelector("#product-all");Y(J).forEach(t=>{-1===n.indexOf(t.id)&&(t.checked=!1,o.checked=!1)}),Y(W).forEach(t=>{-1===r.indexOf(t.id)&&(t.checked=!1,i.checked=!1)})}(),L()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,a=0,u=[],s=n(1);function l(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](o.parts[c]);for(;c<o.parts.length;c++)i.parts.push(m(o.parts[c],e))}else{var a=[];for(c=0;c<o.parts.length;c++)a.push(m(o.parts[c],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(a):n.push(r[c]={id:c,parts:[a]})}return n}function f(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),f(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=a++;n=c||(c=h(e)),r=v.bind(null,n,u,!1),o=v.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=s(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return l(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var c=n[i];(a=r[c.id]).refs--,o.push(a)}t&&l(d(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function v(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"table {\n  margin: 0 auto;\n\n  text-align: center;\n}\n\ntd, th, table {\n  border: 1px solid #000;\n}\n\ntd {\n  width: 50px;\n  padding: 6px;\n}\n\ntd input {\n  width: 30px;\n}\n\n/* 用于替代显示编辑 */\ntd[data-month] {\n  cursor: pointer;\n}\n\n.container {\n  width: 620px;\n  margin: 0 auto;\n}\n\n.container .bar-wrapper,\n.container #canvas {\n  width: 50%;\n}\n\n#region-wrapper,\n#product-wrapper {\n  text-align: center;\n}\n",""])},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(t.exports=r.locals)}]);