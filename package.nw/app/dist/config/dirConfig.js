'use strict';var _exports;function init(){const a=require('path'),b=require('mkdir-p'),c=a.join(nw.App.getDataPath(),'..');_exports={},_exports.WeappStorage=a.join(c,'WeappStorage'),b.sync(_exports.WeappStorage),_exports.WeappFileCache=a.join(c,'WeappFileCache'),b.sync(_exports.WeappFileCache),_exports.Weappdest=a.join(c,'Weappdest'),b.sync(_exports.Weappdest),_exports.WeappApplication=a.join(c,'WeappApplication'),b.sync(_exports.WeappApplication),_exports.WeappVendor=a.join(c,'WeappVendor'),b.sync(_exports.WeappVendor),_exports.WeappBuildCache=a.join(c,'WeappBuildCache'),b.sync(_exports.WeappBuildCache),_exports.WeappLog=a.join(c,'WeappLog'),b.sync(_exports.WeappLog),_exports.WeappProjectInfo=a.join(c,'WeappProject'),b.sync(_exports.WeappProjectInfo),_exports.ProxyCache=a.join(c,'ProxyCache'),b.sync(_exports.ProxyCache)}init(),module.exports=_exports;