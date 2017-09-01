'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b){let c=o.qcloudFileInfo,{data:d,fileMd5Info:e}=await k(a,b,{ignore:[],cwd:a,needMd5:!0,ignoreFileMd5:c});return{data:d,fileMd5Info:e}}async function b(a,b,c={}){if(!c.node_modules&&!c.src){let a=new Error;throw a.code=y,a.message=`请选择需要上传的代码。错误：${y}`,a}let d=[];if(c.node_modules||d.push(h.join(a,'node_modules/**/*')),c.packagejson||d.push(h.join(a,'package.json')),!c.src){let b=j.readdirSync(a);b.forEach((b)=>{if('node_modules'!==b&&'.'!==b&&'package.json'!==b){let c=j.lstatSync(h.join(a,b));c.isDirectory()?d.push(h.join(a,`${b}/**/*`)):d.push(h.join(a,`${b}`))}})}let{data:e,fileMd5Info:f}=await k(a,b,{ignore:d,cwd:a,needMd5:!0});return{data:e,fileMd5Info:f}}async function c(c,f={}){let g=await l(c);if(!g.svr){let a=new Error;throw a.code=v,a.message=`未找到 project.config.json 中的 svr 字段。错误：${v}`,a}let j,k={},m=Date.now(),n=`${parseInt(1e5*Math.random())}_${Date.now()}_qcloud.wx`,p=h.join(z,n);j=f.cleverPack?await a(g.svr,p):await b(g.svr,p,f),k.packTime=Date.now()-m;let q=Date.now(),r=i.gzipSync(j.data);k.zilbTime=Date.now()-q,k.dataLength=j.data.length,k.pDataLength=r.length;let s=await d(_extends({},f,{filename:n}));f.onBeforeUpload&&f.onBeforeUpload(k);let{host:t,url:u,sign:w}=s.body;u=`http://${t}${u}/${n}`;let x=Date.now(),y=await e(u,w,r);if(k.upLoadTime=Date.now()-x,y=JSON.parse(y.body),0===y.code)return o.qcloudFileInfo=_extends({},o.qcloudFileInfo,j.fileMd5Info),{destPath:p,ext:k,upCosRes:y,sign:w,host:t,url:u,fileName:n};throw`UP TO COS ERROR: code: ${y.code} ${y.message}`}async function d(a){return new Promise(async(b,c)=>{try{let c=await m({url:s,body:JSON.stringify({env:a.env||n.CLOUD_ENV_DEVLOPE,filename:a.filename||'',version:a.version||'',remark:a.remark||''}),method:'post',needToken:1,needAppID:1});return r.info('getCosInfo:',c.body),b(c)}catch(a){r.error('getCosInfo:',a),c(a)}})}async function e(a,b,c){return new Promise(async(d,f)=>{try{let e=await m({url:a,needToken:-1,needParse:-1,method:'POST',headers:{Authorization:b},formData:{op:'upload',filecontent:c}});r.info(`upToCos: fileDataLength: ${c.length} resBody:`,e.body),d(e)}catch(a){r.error('upToCos:',a),f(a)}})}async function f(a){let b=a.env||n.CLOUD_ENV_DEVLOPE,c=a.action,d=a.fileName||'';return new Promise(async(e,f)=>{if(A[c]){let a=new Error;return a.code=x,r.error(`operatecvm: ${c}, QCLOUD_SVR_POLL_DOING`),f(a)}A[c]=!0;try{let h=await m({url:t,method:'post',needToken:1,needAppID:1,body:JSON.stringify({action:c,env:b,filename:d})});r.info(`operatecvm: action: ${c}; env: ${b}; resBody:`,h.body),a.beforePoll&&a.beforePoll();let i=h.body.event_uuid,j=await g({uuid:i});return j=JSON.parse(j.body.resp_data),A[c]=!1,0===j.code?e(j):f(j)}catch(a){A[c]=!1,r.error(`operatecvm: action: ${c}; env: ${b}; error:`,a),f(a)}})}async function g(a){async function b(c,d){a.beiginTime||(a.beiginTime=Date.now());let e=a.uuid;if(Date.now()-a.beiginTime>n.POLL_MAX_TIME){let a=new Error;return a.code=w,r.error(`polleventresp: event_uuid: ${e}, QCLOUD_SVR_POLL_TIMEOUT`),d(a)}try{let a=await m({url:u,method:'post',needToken:1,needAppID:1,body:JSON.stringify({event_uuid:e})});r.info(`polleventresp: event_uuid: ${e}, resBody:`,a.body);let f=a.body.state;f===n.CLOUD_EVENT_CREATED?setTimeout(()=>{b(c,d)},n.POLL_TIME):f===n.CLOUD_EVENT_RESPONSED?c(a):d(a)}catch(a){return d(a)}}return new Promise(async(a,c)=>{b(a,c)})}const h=require('path'),i=require('zlib'),j=require('fs'),k=require('./e5fa35c3c8e81bc6466b4b8eb436113b.js'),l=require('./e73500972c89345054b507a25d8ccf0b.js'),m=require('./15ba1827c7f6564a45df6bd44da3a977.js'),n=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),o=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),p=require('./948f9199c1cd0ba6cb9d19ad84972410.js'),q=require('./bcb48ae14d243711d3b31cb0f602d209.js'),r=require('./72653d4b93cdd7443296229431a7aa9a.js'),{getcosinfoURL:s,operatecvmURL:t,polleventrespURL:u}=require('./f171257bbcaef547a3cf27266ccb0db2.js'),{QCLOUD_SVR_NO_FOUND_ERR:v,QCLOUD_SVR_POLL_TIMEOUT:w,QCLOUD_SVR_POLL_DOING:x,QCLOUD_SVR_UP_DIR_CHECK:y}=require('./949d8235c744ced2a80121e4dba34c28.js'),{Weappdest:z}=require('./92320c1386e6db6a6f2556736a9bc280.js');var A={};module.exports={addToNotificationCenter:async function(a){await p.open(),await p.insert([{type:q.DBType.cloud,timestamp:Date.now()/1e3,content:a}]),await p.close()},operatecvm:f,forMatDebugURL:function(a,b){let c=b.replace('ws://0.0.0.0',a);return r.info(`forMatDebugURL: chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${c}`),`chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${c}`},uploadSvrCode:c,polleventresp:g,operate:async function(a,b){let{action:d}=b;return d===n.CLOUD_ACTION_UPLOAD?c(a,b):d===n.CLOUD_ACTION_POLL?g(b):f(b)}}}(require('lazyload'),require);