parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".wall"),e=t.getBoundingClientRect(),c=e.x+t.clientLeft,i=e.y+t.clientTop,n=document.querySelector(".spider"),l=t.clientWidth-n.offsetWidth,o=t.clientHeight-n.offsetHeight;document.addEventListener("click",function(t){var e=t.clientX-c-n.offsetWidth/2,f=t.clientY-i-n.offsetHeight/2;"BODY"!==t.target.tagName&&(e>l&&(e=l),f>o&&(f=o),e<0&&(e=0),f<0&&(f=0),n.style.top="".concat(f,"px"),n.style.left="".concat(e,"px"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.bd3e3748.js.map