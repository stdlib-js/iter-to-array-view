// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var c=Math.abs,s=String.prototype.toLowerCase,y=String.prototype.toUpperCase,h=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,m=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,d=/\.0*e/,v=/(\..*[^0])0*e/;function E(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=h.call(t,v,"$1e"),t=h.call(t,d,"e"),t=h.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,p,"e+0$1"),t=h.call(t,g,"e-0$1"),e.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,w,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):s.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+A(n):A(n)+e}var _=String.fromCharCode,x=isNaN,j=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,a,u,c,s,y;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",c=1,s=0;s<e.length;s++)if(l(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(i=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=L.exec(e);n;)(r=e.slice(i,L.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=L.lastIndex,n=L.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function B(e){return"string"==typeof e}function I(e){var r,t,n;if(!B(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var C,F=Object.prototype,O=F.toString,M=F.__defineGetter__,U=F.__defineSetter__,N=F.__lookupGetter__,P=F.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var Y=C;function W(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=Q()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=J(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},H=Boolean,K=Boolean.prototype.toString,ee=Q();function re(e){return"object"==typeof e&&(e instanceof H||(ee?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function te(e){return $(e)||re(e)}function ne(){return new Function("return this;")()}W(te,"isPrimitive",$),W(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!$(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,le=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;W(ce,"REGEXP",se);var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function he(e){return null!==e&&"object"==typeof e}function pe(e){return he(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ge(e){var r,t,n;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return pe(e)?"Buffer":t}W(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he));var me="function"==typeof e||"object"==typeof le||"function"==typeof fe?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function we(e){return"function"===me(e)}var be=Math.floor;function de(e){return be(e)===e}function ve(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ee(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&we(e.next)}function Ae(e){return"number"==typeof e}var Te=Number,_e=Te.prototype.toString,xe=Q();function je(e){return"object"==typeof e&&(e instanceof Te||(xe?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ke(e){return Ae(e)||je(e)}W(ke,"isPrimitive",Ae),W(ke,"isObject",je);var Ve=Number.POSITIVE_INFINITY,Le=Te.NEGATIVE_INFINITY;function Re(e){return e<Ve&&e>Le&&de(e)}function Se(e){return Ae(e)&&Re(e)}function Be(e){return je(e)&&Re(e.valueOf())}function Ie(e){return Se(e)||Be(e)}W(Ie,"isPrimitive",Se),W(Ie,"isObject",Be);var Ce="function";function Fe(e){return typeof e.get===Ce&&typeof e.set===Ce}var Oe={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function Me(e){var r=Oe[e];return"function"==typeof r?r:Oe.default}var Ue={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function Ne(e){var r=Ue[e];return"function"==typeof r?r:Ue.default}var Pe={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Ye="function"==typeof Float64Array,We="function"==typeof Float64Array?Float64Array:null,$e="function"==typeof Float64Array?Float64Array:void 0,Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,NaN]),t=r,e=(Ye&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")},Qe="function"==typeof Float32Array,Ze="function"==typeof Float32Array?Float32Array:null,Xe="function"==typeof Float32Array?Float32Array:void 0,Je=function(){var e,r,t;if("function"!=typeof Ze)return!1;try{r=new Ze([1,3.14,-3.14,5e40]),t=r,e=(Qe&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ve}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")},ze="function"==typeof Uint32Array,qe="function"==typeof Uint32Array?Uint32Array:null,De="function"==typeof Uint32Array?Uint32Array:void 0,He=function(){var e,r,t;if("function"!=typeof qe)return!1;try{r=new qe(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ze&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?De:function(){throw new Error("not implemented")},Ke="function"==typeof Int32Array,er="function"==typeof Int32Array?Int32Array:null,rr="function"==typeof Int32Array?Int32Array:void 0,tr=function(){var e,r,t;if("function"!=typeof er)return!1;try{r=new er([1,3.14,-3.14,2147483648]),t=r,e=(Ke&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?rr:function(){throw new Error("not implemented")},nr="function"==typeof Uint16Array,ir="function"==typeof Uint16Array?Uint16Array:null,or="function"==typeof Uint16Array?Uint16Array:void 0,ar=function(){var e,r,t;if("function"!=typeof ir)return!1;try{r=new ir(r=[1,3.14,-3.14,65536,65537]),t=r,e=(nr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?or:function(){throw new Error("not implemented")},ur="function"==typeof Int16Array,fr="function"==typeof Int16Array?Int16Array:null,lr="function"==typeof Int16Array?Int16Array:void 0,cr=function(){var e,r,t;if("function"!=typeof fr)return!1;try{r=new fr([1,3.14,-3.14,32768]),t=r,e=(ur&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?lr:function(){throw new Error("not implemented")},sr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0,pr=function(){var e,r,t;if("function"!=typeof yr)return!1;try{r=new yr(r=[1,3.14,-3.14,256,257]),t=r,e=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?hr:function(){throw new Error("not implemented")},gr="function"==typeof Uint8ClampedArray,mr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,br=function(){var e,r,t;if("function"!=typeof mr)return!1;try{r=new mr([-1,0,1,3.14,4.99,255,256]),t=r,e=(gr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?wr:function(){throw new Error("not implemented")},dr="function"==typeof Int8Array,vr="function"==typeof Int8Array?Int8Array:null,Er="function"==typeof Int8Array?Int8Array:void 0,Ar=function(){var e,r,t;if("function"!=typeof vr)return!1;try{r=new vr([1,3.14,-3.14,128]),t=r,e=(dr&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Er:function(){throw new Error("not implemented")};function Tr(e){return Se(e)&&e>=0}function _r(e){return Be(e)&&e.valueOf()>=0}function xr(e){return Tr(e)||_r(e)}function jr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=4294967295}W(xr,"isPrimitive",Tr),W(xr,"isObject",_r);var kr="function"==typeof ArrayBuffer;function Vr(e){return kr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}function Lr(e){return"object"==typeof e&&null!==e&&!ye(e)}function Rr(e,r){if(!(this instanceof Rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ae(e))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ae(r))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}W(Rr,"BYTES_PER_ELEMENT",8),W(Rr.prototype,"BYTES_PER_ELEMENT",8),W(Rr.prototype,"byteLength",16),W(Rr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Rr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Sr="function"==typeof Math.fround?Math.fround:null,Br=new Je(1),Ir="function"==typeof Sr?Sr:function(e){return Br[0]=e,Br[0]};function Cr(e,r){if(!(this instanceof Cr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ae(e))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ae(r))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ir(e)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ir(r)}),this}function Fr(e){return e instanceof Rr||e instanceof Cr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Or(e){return de(e/2)}function Mr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}W(Cr,"BYTES_PER_ELEMENT",4),W(Cr.prototype,"BYTES_PER_ELEMENT",4),W(Cr.prototype,"byteLength",8),W(Cr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Cr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Ur=Mr()?Symbol.iterator:null;function Nr(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,get:t})}function Pr(e){return e.re}function Yr(e){return e.im}function Wr(e,r){return new Je(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function $r(e,r){return new Ge(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Gr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Qr(e){var r=Gr[e];return"function"==typeof r?r:Gr.default}var Zr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Xr(e){var r=Zr[e];return"function"==typeof r?r:Zr.default}function Jr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(jr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Fr(n))return new TypeError(I("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Pr(n),Yr(n))}return r}function zr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,jr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fr(o))return new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Pr(o),Yr(o))}return n}function qr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Fr(n=r[i]))return null;e[o]=Pr(n),e[o+1]=Yr(n),o+=2}return e}var Dr=2*Je.BYTES_PER_ELEMENT,Hr=Mr();function Kr(e){return e instanceof nt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function et(e){return e===nt||"Complex128Array"===e.name}function rt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Dr}function tt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Dr}function nt(){var e,r,t,n;if(r=arguments.length,!(this instanceof nt))return 0===r?new nt:1===r?new nt(arguments[0]):2===r?new nt(arguments[0],arguments[1]):new nt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Je(0);else if(1===r)if(Tr(arguments[0]))t=new Je(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Fr(t[0])){if(null===(t=qr(new Je(2*n),t))){if(!Or(n))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Je(arguments[0])}}else{if(rt(t))t=Wr(t,0);else if(tt(t))t=$r(t,0);else if(!Or(n))throw new RangeError(I("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Je(t)}else if(Vr(arguments[0])){if(!de((t=arguments[0]).byteLength/Dr))throw new RangeError(I("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Dr,t.byteLength));t=new Je(t)}else{if(!Lr(arguments[0]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Hr)throw new TypeError(I("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[Ur]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[Ur]()).next))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Jr(t))instanceof Error)throw t;t=new Je(t)}else{if(!Vr(t=arguments[0]))throw new TypeError(I("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Tr(e=arguments[1]))throw new TypeError(I("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/Dr))throw new RangeError(I("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Dr,e));if(2===r){if(!de((n=t.byteLength-e)/Dr))throw new RangeError(I("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Dr,n));t=new Je(t,e)}else{if(!Tr(n=arguments[2]))throw new TypeError(I("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Dr>t.byteLength-e)throw new RangeError(I("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Dr));t=new Je(t,e,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}function it(e){return e.re}function ot(e){return e.im}function at(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(jr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Fr(n))return new TypeError(I("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(it(n),ot(n))}return r}function ut(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,jr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fr(o))return new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(it(o),ot(o))}return n}function ft(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Fr(n=r[i]))return null;e[o]=it(n),e[o+1]=ot(n),o+=2}return e}W(nt,"BYTES_PER_ELEMENT",Dr),W(nt,"name","Complex64Array"),W(nt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Kr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,e.get(s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?Xr("default"):Qr("default"),s=0;s<f;s++)if(!Fr(u(e,s))){l=!0;break}if(l){if(!Or(f))throw new RangeError(I("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,u(e,s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Lr(e)&&Hr&&we(e[Ur])){if(!we((o=e[Ur]()).next))throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?zr(o,n,r):Jr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),W(nt,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(nt.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(nt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(nt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(nt.prototype,"BYTES_PER_ELEMENT",nt.BYTES_PER_ELEMENT),W(nt.prototype,"copyWithin",(function(e,r){if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),W(nt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Cr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),W(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Ur&&W(t,Ur,(function(){return r.entries()})),t})),W(nt.prototype,"get",(function(e){var r;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Tr(e))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Cr((r=this._buffer)[e*=2],r[e+1])})),Nr(nt.prototype,"length",(function(){return this._length})),W(nt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Tr(t=arguments[1]))throw new TypeError(I("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fr(e)){if(t>=this._length)throw new RangeError(I("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Pr(e),void(n[t+1]=Yr(e))}if(Kr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Je(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(I("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Fr(e[f])){o=!0;break}if(o){if(!Or(a))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Je(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Pr(u),n[t+1]=Yr(u),t+=2}}));var lt=2*Ge.BYTES_PER_ELEMENT,ct=Mr();function st(e){return e instanceof gt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function yt(e){return e===gt||"Complex64Array"===e.name}function ht(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===lt/2}function pt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===lt}function gt(){var e,r,t,n;if(r=arguments.length,!(this instanceof gt))return 0===r?new gt:1===r?new gt(arguments[0]):2===r?new gt(arguments[0],arguments[1]):new gt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ge(0);else if(1===r)if(Tr(arguments[0]))t=new Ge(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Fr(t[0])){if(null===(t=ft(new Ge(2*n),t))){if(!Or(n))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ge(arguments[0])}}else{if(ht(t))t=Wr(t,0);else if(pt(t))t=$r(t,0);else if(!Or(n))throw new RangeError(I("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ge(t)}else if(Vr(arguments[0])){if(!de((t=arguments[0]).byteLength/lt))throw new RangeError(I("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",lt,t.byteLength));t=new Ge(t)}else{if(!Lr(arguments[0]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ct)throw new TypeError(I("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[Ur]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[Ur]()).next))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=at(t))instanceof Error)throw t;t=new Ge(t)}else{if(!Vr(t=arguments[0]))throw new TypeError(I("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Tr(e=arguments[1]))throw new TypeError(I("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/lt))throw new RangeError(I("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",lt,e));if(2===r){if(!de((n=t.byteLength-e)/lt))throw new RangeError(I("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",lt,n));t=new Ge(t,e)}else{if(!Tr(n=arguments[2]))throw new TypeError(I("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*lt>t.byteLength-e)throw new RangeError(I("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*lt));t=new Ge(t,e,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}W(gt,"BYTES_PER_ELEMENT",lt),W(gt,"name","Complex128Array"),W(gt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(st(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,e.get(s),s)))o[y]=it(c),o[y+1]=ot(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?Xr("default"):Qr("default"),s=0;s<f;s++)if(!Fr(u(e,s))){l=!0;break}if(l){if(!Or(f))throw new RangeError(I("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,u(e,s),s)))o[y]=it(c),o[y+1]=ot(c);else{if(!(jr(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Lr(e)&&ct&&we(e[Ur])){if(!we((o=e[Ur]()).next))throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?ut(o,n,r):at(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),W(gt,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(gt.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(gt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(gt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(gt.prototype,"BYTES_PER_ELEMENT",gt.BYTES_PER_ELEMENT),W(gt.prototype,"copyWithin",(function(e,r){if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),W(gt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Rr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),W(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Ur&&W(t,Ur,(function(){return r.entries()})),t})),W(gt.prototype,"get",(function(e){var r;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Tr(e))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Rr((r=this._buffer)[e*=2],r[e+1])})),Nr(gt.prototype,"length",(function(){return this._length})),W(gt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Tr(t=arguments[1]))throw new TypeError(I("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fr(e)){if(t>=this._length)throw new RangeError(I("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=it(e),void(n[t+1]=ot(e))}if(st(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*lt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ge(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(I("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Fr(e[f])){o=!0;break}if(o){if(!Or(a))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*lt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ge(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=it(u),n[t+1]=ot(u),t+=2}}));var mt=[Ge,Je,tr,He,cr,ar,Ar,pr,br,nt,gt],wt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],bt=wt.length;function dt(e){var r;if(ye(e))return"generic";if(pe(e))return null;for(r=0;r<bt;r++)if(e instanceof mt[r])return wt[r];return Pe[ge(e)]||null}function vt(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r){var t,n,i,o,a,u,f,l,c;if(!Ee(e))throw new TypeError(vt("0Q146,G5",e));if(!ve(r))throw new TypeError(vt("0Q12y,Ix",r));if(2===(n=arguments.length))i=0,o=r.length;else if(3===n)we(arguments[2])?(i=0,a=arguments[2]):i=arguments[2],o=r.length;else if(4===n)we(arguments[2])?(i=0,o=r.length,a=arguments[2],t=arguments[3]):we(arguments[3])?(i=arguments[2],o=r.length,a=arguments[3]):(i=arguments[2],o=arguments[3]);else if(5===n){if(i=arguments[2],we(arguments[3]))o=r.length,a=arguments[3],t=arguments[4];else if(o=arguments[3],!we(a=arguments[4]))throw new TypeError(vt("0Q131,Lk",a))}else{if(i=arguments[2],o=arguments[3],!we(a=arguments[4]))throw new TypeError(vt("0Q131,Lk",a));t=arguments[5]}if(!Se(i))throw new TypeError(vt("0Q1Ll",i));if(!Se(o))throw new TypeError(vt("0Q1Lm",o));if(o<0?(o=r.length+o)<0&&(o=0):o>r.length&&(o=r.length),i<0&&(i=r.length+i)<0&&(i=0),f=dt(r),u=Fe(r)?Me(f):Ne(f),l=i-1,a){for(;l<o-1&&(l+=1,!(c=e.next()).done);)u(r,l,a.call(t,c.value,l,l-i));return r}for(;l<o-1&&(l+=1,!(c=e.next()).done);)u(r,l,c.value);return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterator2arrayview=r();
//# sourceMappingURL=browser.js.map