// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function m(m,h){var a,f,j,p,g,v,c,x,y;if(!r(m))throw new TypeError(d("0Q146,G5",m));if(!s(h))throw new TypeError(d("0Q12y,Ix",h));if(2===(f=arguments.length))j=0,p=h.length;else if(3===f)e(arguments[2])?(j=0,g=arguments[2]):j=arguments[2],p=h.length;else if(4===f)e(arguments[2])?(j=0,p=h.length,g=arguments[2],a=arguments[3]):e(arguments[3])?(j=arguments[2],p=h.length,g=arguments[3]):(j=arguments[2],p=arguments[3]);else if(5===f){if(j=arguments[2],e(arguments[3]))p=h.length,g=arguments[3],a=arguments[4];else if(p=arguments[3],!e(g=arguments[4]))throw new TypeError(d("0Q131,Lk",g))}else{if(j=arguments[2],p=arguments[3],!e(g=arguments[4]))throw new TypeError(d("0Q131,Lk",g));a=arguments[5]}if(!t(j))throw new TypeError(d("0Q1Ll",j));if(!t(p))throw new TypeError(d("0Q1Lm",p));if(p<0?(p=h.length+p)<0&&(p=0):p>h.length&&(p=h.length),j<0&&(j=h.length+j)<0&&(j=0),c=l(h),v=i(h)?n(c):o(c),x=j-1,g){for(;x<p-1&&(x+=1,!(y=m.next()).done);)v(h,x,g.call(a,y.value,x,x-j));return h}for(;x<p-1&&(x+=1,!(y=m.next()).done);)v(h,x,y.value);return h}export{m as default};
//# sourceMappingURL=index.mjs.map
