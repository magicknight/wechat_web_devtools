'use strict';!function(require,directRequire){async function a(a){let b=await f(a),c={},d=b.pages||[];c.pages=d,c.entryPagePath=`${d[0]}.html`,c.debug=b.debug||!1,c.networkTimeout=Object.assign({request:6e4,uploadFile:6e4,connectSocket:6e4,downloadFile:6e4},b.networkTimeout),c.widgets=b.widgets||[],c.global={window:b.window||{}},c.customClose=!!b.customClose,c.ext=b.ext||{},c.extAppid=b.extAppid||'',c.page={};for(var e=0;e<d.length;e++){var h=d[e],i={};i=await g(a,`${h}`),c.page[`${h}.html`]={window:i}}if('[object Object]'==Object.prototype.toString.call(b.tabBar)){for(var j,k=Object.assign({},b.tabBar),l=[].concat(k.list||[]),m=[],e=0;e<l.length;e++)j=Object.assign({},l[e]),j.pagePath+='.html',m.push(j);k.list=m,c.tabBar=k}return c}function b(){h=void 0}function c(a,c){let e=d.extname(c);'.json'===e&&b()}const d=require('path'),e=require('./2c9d8048c89177fae2327b7849a5e105.js'),f=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),g=require('./d260ebf687a29f24aed49f66b233ab7d.js');var h,i;module.exports=async function(d){let f=await e(d,i,c);return f&&(b(),i=f),h||(h=await a(d)),h}}(require('lazyload'),require);