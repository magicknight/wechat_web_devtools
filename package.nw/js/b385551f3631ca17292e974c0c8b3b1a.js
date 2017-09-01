"use strict";!function(require,directRequire){const a=1,b=2,c=(a)=>{return 1e3*a},d=(a,b,c)=>{const d={pid:a,tid:b,cat:c.category,name:c.name,ph:c.phase,ts:c.start,args:c.args};return c.phase==="X"&&(d.dur=c.end-c.start),d},f=(a,b,c)=>{return Object.assign(d(a,b,c),{name:"CPU(%)",min:0,max:100})},g=(a,b,c)=>{return Object.assign(d(a,b,c),{min:0,max:60})},h=(a,b,c,e)=>{return Object.assign(d(a,b,c),{name:"MEMORY(MB)",min:0,max:e?e:void 0})},e=(a,b,c,d)=>{return{name:c,ph:"M",ts:0,pid:a,tid:b,cat:"__metadata",args:d}};class i{constructor(){this._data={traceEvents:[],otherData:{version:"1.0.0"}},this._cachedCategoryThreads=[],this._initData()}set totalMem(a){this.totalMem_=a}_initData(){this._data.traceEvents.push(e(a,0,"process_name",{name:"Hardware"})),this._data.traceEvents.push(e(b,0,"process_name",{name:"MiniProgram"})),global.isDev&&this._createCategoryThread("Native"),this._createCategoryThread("API")}_createCategoryThread(a){const c=this._cachedCategoryThreads[this._cachedCategoryThreads.length-1],d=null==c?1:c.tid+1,f=e(b,d,"thread_name",{name:a});return this._data.traceEvents.push(f),f}_findCategoryThread(a){let b=this._cachedCategoryThreads.find(function(b){return b.args.name.toLowerCase()===a.toLowerCase()});return null==b&&(b=this._createCategoryThread(a),this._cachedCategoryThreads.push(b)),b}_parseRow(a){const b=a.split(",");if(0>=b)return console.error("columns length error."),null;const d=b[0],e=b[1],f=b[2];let g,h=parseInt(b[3]),i=parseInt(b[4]);try{g=JSON.parse(decodeURIComponent(b[5]))}catch(a){}return"number"==typeof h&&(h=c(h)),"number"==typeof i&&(i=c(i)),{name:d,category:e,phase:f,start:h,end:i,args:g}}parseByLine(c){const i=this._parseRow(c);if(null==i)return;let e,j=1;if(global.isDev||"native"!==i.category.toLowerCase()){if("hardware"===i.category.toLowerCase())"cpu"===i.name.toLowerCase()?e=f(a,j,i):"fps"===i.name.toLowerCase()?e=g(a,j,i):"memory"===i.name.toLowerCase()&&(e=h(a,j,i,this.totalMem_));else{const a=this._findCategoryThread(i.category);j=a.tid,e=d(b,j,i)}this._data.traceEvents.push(e)}}parse(a){const b=this;a.split(/\r?\n/).forEach((a)=>{b.parseByLine(a)})}result(){return this._data}}module.exports=i}(require("lazyload"),require);