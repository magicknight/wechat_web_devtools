'use strict';!function(require,directRequire){function a(a,b,c,d){c=0<c?c:1;let e=h(a,b,c);return`${d}\n${e}`}const b=require('fs'),c=require('path'),d=require('./3bfffbe88b3d923921f851c0697974fe.js'),e=require('./949d8235c744ced2a80121e4dba34c28.js'),f=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix,g=require('./libs/jsonlint.js').parser,h=require('babel-code-frame'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js');g.parseError=g.lexer.parseError=function(a,b){throw b};const j=f.WXML_ERROR,k=f.WXML_LOSE_ERROR,l={};l.parseWXMLRuntimeErr=async(b)=>{let c=b.message.replace(f.WXML_RUNTIME_ERROR,''),g=c.split(':'),e=parseInt(g[2]),h=parseInt(g[3]);if(-1===e);else try{let b=d.getCurrent(),f=await i(b),j=f.getFile(g[0]),k=c.replace(`${g[0]}:${g[1]}:${g[2]}:${g[3]}:`,'').replace(/`/g,'"'),l=a(j,e,h,k);return{file:g[0],reason:k,msg:l}}catch(a){return{file:g[0],msg:a}}},l.parseJsFileErr=async(a)=>{let b=a.file.replace(/\.js$/,''),c=a.project,d=await i(c),e=JSON.parse(d.getFile('app.json')),f=e.pages,g=f.findIndex((a)=>{return a==b});return{file:b,msg:` app.json.pages\n > | pages[${g}] : ${f[g]}`}},l.parseJsonContentErr=(a)=>{return{file:a.file,msg:a.data}},l.parseJsonEntranceErr=(a)=>{let b=JSON.parse(a.data),c=b.pages;return{file:a.file,msg:`未找到入口页面\napp.json 中定义的 pages : ${JSON.stringify(c)}`}},l.parseJsonFileErr=(a)=>{return{file:a.file,msg:`未找到入口 ${a.file} 文件，或者文件读取失败，请检查后重新编译。`}},l.parseJsonParseErr=(b)=>{let c=b.data,d=b.e;try{g.parse(c)}catch(d){let e=`Expecting ${d.expected}, got ${d.token}`,f=a(c,d.line,d.loc.first_column,e);return b.msg=f,delete b.data,delete b.e,b}return b.msg=b.e.toString(),b},l.parseWxmlErr=async(b,c)=>{let d=(c||'').trim().split(':');try{if(d.length){let c=await i(b),e=parseInt(d[1].trim()),f=parseInt(d[2].trim()-1),g=a(c.getFile(d[0]),e,f,d[3]),h={file:d[0],msg:g};return h}}catch(a){return c}},l.parseWxmlLoseErr=(a,b)=>{let c=b.match(/(\d.*?)\:/),d=c[1],e=JSON.parse(b.replace(c[0],'')),f=`未找到 ${e.pages[d]}.wxml 文件 \n > ${d} ${e.pages[d]}`;return`${k}${encodeURIComponent(f)}`},l.parseWxssErr=async(b,c)=>{try{if(c='object'==typeof c?c.msgForConsole:c,c=c.split('\n')[0],/not found from/.test(c)){let a=c.match(/ERR:.+?`(.+)`.+?`(.+)`/),b=a[1],d=a[2],e={file:d,msg:`File not found: ${b}`};return e}let d=c.match(/ERR:\s(.+)\((\d*):(\d*)\):\s*?(.+)/),e=parseInt(d[2]),f=parseInt(d[3]-1),g=d[4].replace(/`/g,'"'),h=d[1],j=await i(b),k=j.getFile(h),l=a(k,e,f,g);return{file:h,reason:g,msg:l}}catch(a){return{file:'',msg:c}}},module.exports=l}(require('lazyload'),require);