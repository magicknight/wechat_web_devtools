'use strict';!function(require,directRequire){const a=require('./8fbd6def1ab387883f5913820f0bb2bf.js'),b=require('./dca9191eced65b3831d60c02d8d487c2.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./fc137838572a83604db39acff8e909e0.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:h}=require('react-redux');module.exports=h((a)=>{let b=a.simulator.currentWebviewID,c=a.simulator.webviewInfos[b],d=a.project.current;return{scene:a.simulator.scene,appConfig:a.simulator.appConfig,device:a.toolbar.deviceInfo,networkType:a.toolbar.network.list[a.toolbar.network.current],editorShow:a.window.editor&&a.window.editor.show,show:a.window.debug.show,appLaunched:a.simulator.appLaunched,compileCommand:a.simulator.compileCommand,project:d,libVersion:d.libVersion,assdkCallbackInfo:a.simulator.assdkCallbackInfo,appRoute:a.simulator.appRoute,restartTimes:a.simulator.restartTimes,beginTime:a.simulator.beginTime,storage:d.storage&&d.storage.cache||{},currentWebviewID:b,currentWebview:c}},(a)=>{return{setDebuggerWindow:g.bindActionCreators(d.setDebuggerWindow,a),assdkActions:g.bindActionCreators(b,a),simulatorActions:g.bindActionCreators(c,a),windowActions:g.bindActionCreators(d,a),toolbarActions:g.bindActionCreators(e,a),infoActions:g.bindActionCreators(f,a)}})(a)}(require('lazyload'),require);