'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js');class c extends a.Component{render(){let c=0,d=!1,e=this.state.isStatusHeightValid?b.displayNone:{};e.color='red';let f=windowStores.getWebviewInfo();'Android'===f.os&&(d=!0,c++);let g=this.state.show?{}:b.displayNone,h=0<c;return a.createElement('div',{className:'simulator-toolbar-model simulator-toolbar-model-more',style:h?{}:b.displayNone,onClick:this.handleOnMoreIconClick},a.createElement('p',null,'\u2022\u2022\u2022'),a.createElement('div',{className:'simulator-toolbar-more-wrapper',style:g,onClick:this.handleOnMoreContentClick},a.createElement('div',{className:'simulator-toolbar-more-option',style:d?{}:b.displayNone},a.createElement('div',{className:'simulator-toolbar-more-option-line'},a.createElement('p',{className:'simulator-toolbar-more-option-name'},'\u72B6\u6001\u680F\u9AD8\u5EA6'),a.createElement('div',{className:'simulator-toolbar-more-option-value'},a.createElement('input',{type:'number',className:'ui-input-minimal',min:0,max:50,value:this.state.statusbarHeight,onChange:(a)=>this.onStatusInputChange(a)}))),a.createElement('p',{className:'ui-input-footnote'},'\u53EA\u9002\u7528\u4E8E Android\uFF0CAndroid \u72B6\u6001\u680F\u9AD8\u5EA6\u9ED8\u8BA4 25dp\uFF0CiOS \u72B6\u6001\u680F\u9AD8\u5EA6\u56FA\u5B9A 20dp\uFF0C\u8BF7\u5728\u6B64\u586B\u5199\u60A8\u7684 Android \u6D4B\u8BD5\u673A\u578B\u7684\u72B6\u6001\u680F\u9AD8\u5EA6'),a.createElement('p',{className:'ui-input-error-tips',style:e},a.createElement('i',{className:'fa fa-exclamation-circle fa-2 icon',"aria-hidden":'true'}),'\u72B6\u6001\u680F\u9AD8\u5EA6\u5FC5\u987B\u5927\u4E8E 0 \u5C0F\u4E8E 50')),a.createElement(SettingFooter,{save:this.handleSave,cancel:this.handleCancel,restoreDefault:this.handleRestoreDefault})))}}}(require('lazyload'),require);