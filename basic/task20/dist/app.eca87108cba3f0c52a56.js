!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class n{constructor({name:t,salary:e}){this.id=n.uid++,this.name=t,this.salary=e}work(t){throw new Error("抽象函数不能被调用")}}n.uid=0;const o=new class{constructor({cash:t,seats:e,staff:r}){this.cash=t,this.seats=e,this.staff=r}hire(t){if(-1!==this.staff.indexOf(t))throw new Error("该员工已被雇佣");this.staff.push(t)}fire(t){const e=this.staff.indexOf(t);if(-1===e)throw new Error("该员工没有被雇佣");this.staff.splice(e,1)}}({cash:1e6,seats:20,staff:[]}),s=new class extends n{constructor(t,e){super({name:t,salary:e})}work(t){}}("Tony",1e4);o.hire(s),console.log(o.staff),o.fire(s),console.log(o.staff)}]);