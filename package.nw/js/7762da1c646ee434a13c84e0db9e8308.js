'use strict';!function(require,directRequire){function a(a){let b=a.split('.'),c=parseInt(b[0]),d=parseInt(b[1]),e=parseInt(b[2]);if(c>G)return'app';return c==G&&d>H?'big_code':c==G&&d==H&&e>I&&'small_code'}async function b(a,b){K=!0,u({title:`有新版本`,message:`新版本 ${a} 已经准备好，立刻重启安装？`,buttons:[{title:'\u5B89\u88C5\u65B0\u7248\u672C'}],callback:(a)=>{if(0===a){let a=z?'open':b,c=z?[b]:[];try{q(a,c,{detached:!0,cwd:x})}catch(a){nw.Shell.openItem(n.join(x,b))}nw.App.quit()}}}),await A.open(),await A.insert('noticecenter',[{type:B.DBType.tools,title:'\u7248\u672C\u66F4\u65B0',content:`最新的开发工具版本 ${a}`,link:b,timestamp:Date.now()/1e3}]),await A.close()}function c(a){u({title:`有新版本`,message:`新版本 ${a} 已经准备好，立刻重启更新？`,buttons:[{title:'\u91CD\u542F'}],callback:(a)=>{0===a&&chrome.runtime.reload()}})}function d(a,c){if(J)return;let d=z?'darwin':'x64'===process.arch?'x64':'ia32',e={url:c?c:`${D}&type=${d}`},f=`${d}_${a}.${z?'ndmg':'nexe'}`,g=n.join(x,f),h=`${d}_${a}.${z?'dmg':'exe'}`,i=n.join(x,h);k.existsSync(i)?b(a,h):(r(e,(c)=>{c||k.rename(g,i,(c)=>{c||b(a,h)}),J=!1}).pipe(k.createWriteStream(g,{mode:511})),J=!0)}function e(){return new Promise((a,b)=>{let c={url:`${D}&type=small_code`,needToken:0,encoding:null};r(c,(c,d,e)=>{c?b(c):a(e)})})}function f(a){return new Promise((b,c)=>{l.gunzip(a,(a,d)=>{a?c(a):b(d)})})}function g(a,b){let c=n.join(x,b.toString());o.sync(c);let d=z?n.join(c,'app.nw'):n.join(c,'package.nw');m.extractAll(a,d);let e=n.join(d,'package.json'),f=JSON.parse(k.readFileSync(e,'utf8'));f['chromium-args']=z?'--disable-devtools --enable-experimental-web-platform-features -load-extension=/Applications/wechatwebdevtools2.app/Contents/Resources/app.nw/js/extensions/devtools/ -ignore-certificate-errors':'--disable-devtools --enable-experimental-web-platform-features -load-extension=./package.nw/js/extensions/devtools/ -ignore-certificate-errors',k.writeFileSync(e,JSON.stringify(f),'utf8')}async function h(a,b){return void d(a)}function i(a='0.0.0.0'){if(w.getAPIVersion()!==a)w.update();else try{k.existsSync(L)&&k.existsSync(N)&&k.existsSync(M)||w.update()}catch(a){v.error(`update latest api failed with error ${a}`)}}function j(b){return a(b.last_ide)}const k=require('fs'),l=require('zlib'),m=require('asar'),n=require('path'),o=require('mkdir-p'),p=require('glob'),q=require('child_process').spawn,r=require('./233d77ecf0781f44985f684f70e316d0.js'),s=require('./f171257bbcaef547a3cf27266ccb0db2.js'),t=require('./92320c1386e6db6a6f2556736a9bc280.js'),u=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),v=require('./72653d4b93cdd7443296229431a7aa9a.js'),w=require('./4e88c741ca9fb65fab96c500b6d7f2fb.js'),x=t.WeappApplication,y=n.join(x,'uplog.json'),z='darwin'===process.platform,A=require('./4102b43ad51182743111f5d5e1fc5b46.js'),B=require('./bcb48ae14d243711d3b31cb0f602d209.js'),C=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),D=`${s.downloadRedirectURL}?os=${z?'darwin':'win'}`,E=global.appVersion,F=E.split('.'),G=parseInt(F[0]),H=parseInt(F[1]),I=parseInt(F[2]);var J=!1;var K=!1;const L=w.JSAPIFilePath,M=w.JSAPIMonacoFilePath,N=w.ComponentAPIFilePath;module.exports={onConfigUpdate:function(a){i(a.last_api);{let b=j(a);b&&h(a.last_ide,b)}},cleanApplicationCache:function(){return new Promise((a)=>{p('*',{cwd:x},(b,c)=>{c.forEach((a)=>{let b=n.join(x,a);k.unlinkSync(b)}),a()})})},checkNeedUpdate:j}}(require('lazyload'),require);