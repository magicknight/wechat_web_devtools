'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./e40e098fcb2111ba9f21e79c183fec7e.js'),d=require('./a1dd553cc059d528bb0ef56afed53968.js');class e extends a.Component{componentDidMount(){this._onMessage=this.onMessage.bind(this),this.htmlIds={},c.register(this._onMessage)}componentWillUnmount(){c.unRegister(this._onMessage)}onMessage(a){let{command:b,data:e,webviewID:f}=a;if(this.htmlIds[f]&&'WEBDEBUGGER_INVOKE'==b){let{api:a,args:b,callbackID:f}=e;'invokeMiniProgramAPI'===a&&(d.triggerOnEvent({eventName:'onWebInvokeAppService',data:b,webviewID:this.props.htmlwebview.webviewID}),c.send({command:'WEBDEBUGGER_INVOKE_CALLBACK',callbackID:f,data:{eventName:'invokeMiniProgramAPI',data:{errMsg:'invokeMiniProgramAPI:ok'}}}))}}addWebview(a){let{position:b,htmlId:c}=a,d=this.props.info.id,e=`${c}${d}`,f=this.webview=document.createElement('webview');f.className=`simulator-bd-webview_body htmlwebview${d}`,f.setAttribute('partition','persist:htmlwebview'),this.setWebviewHeight(b);let g=this.props.ua.replace('{{webviewID}}',e);g+=`port/${global.messageCenterPort} webdebugger miniprogram`,this.webview.setUserAgentOverride(g),this.container.appendChild(f),this.props.insertHTMLWebView({callbackID:a.callbackID,webviewID:a.webviewID,res:{errMsg:'insertHTMLWebView:ok'}}),this.htmlIds[e]=!0}upWebview(a){this.webview.src=a.src,this.props.updateHTMLWebView({callbackID:a.callbackID,webviewID:a.webviewID,res:{errMsg:'updateHTMLWebView:ok'}})}removeWebview(a){this.webview.remove(),this.webview=void 0,this.props.updateHTMLWebView({callbackID:a.callbackID,webviewID:a.webviewID,res:{errMsg:'removeHTMLWebView:ok'}})}setWebviewHeight(a){if(this.webview){let b=a.height/this.props.deviceScale,c=a.width/this.props.deviceScale;this.webview.style.cssText=`height: ${b}px;width: ${c}px;top: ${a.top}px;left: ${a.left}px;position:absolute`}}componentWillReceiveProps(a){let b=a.htmlwebview;if(b.htmlId)return b.webviewID===this.props.info.id?('insertHTMLWebView'===b.api?this.addWebview(b):'updateHTMLWebView'===b.api?this.upWebview(b):'removeHTMLWebView'===e.api&&this.removeWebview(b),void(a.deviceScale!=this.props.deviceScale&&this.setWebviewHeight(a.htmlwebview.position))):void 0}render(){this.props;return a.createElement('div',{className:'webview',ref:(a)=>this.container=a})}}module.exports=e}(require('lazyload'),require);