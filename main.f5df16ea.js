parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".field"),r=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),t=document.querySelector(".remove-column"),o=10,c=2,d=10,s=2;function i(){var i=e.rows.length,u=e.rows[0].cells.length;r.disabled=i>=o,l.disabled=i<=c,n.disabled=u>=d,t.disabled=u<=s}r.addEventListener("click",function(){for(var r=e.insertRow(),l=0;l<e.rows[0].cells.length;l++)r.insertCell();i()}),l.addEventListener("click",function(){e.rows.length>1&&(e.deleteRow(e.rows.length-1),i())}),n.addEventListener("click",function(){for(var r=0;r<e.rows.length;r++)e.rows[r].insertCell();i()}),t.addEventListener("click",function(){if(e.rows[0].cells.length>1){for(var r=0;r<e.rows.length;r++)e.rows[r].deleteCell(-1);i()}}),i();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f5df16ea.js.map