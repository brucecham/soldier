// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn'];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());

// Place any jQuery/helper plugins in here.
var jackyFn={aLink:function(){$(".aLink").each(function(){$(this).attr("title",$(this).text()).addClass("aLinkStyle");$(this).click(function(){$(this).blur()})})},filterAbs:function(_do,_wrape,_id,property){switch(_do){case"yes":if(!$(".filterAbs").hasClass("active")){var _visiH=$(window,"html").height(),_abs=$("<div class='filterAbs' id='"+_id+"'></div>"),_cntH=$("#wrap");_abs.appendTo(_wrape).height((_visiH>_cntH)?_visiH:_cntH).addClass("active")}if(property){if(property.zIndex){$("#"+_id).css({zIndex:property.zIndex})}if(property.opacity){$("#"+_id).css({opacity:property.opacity})}if(property.background){$("#"+_id).css({background:property.background})}}break;case"no":if(_id){$("#"+_id).fadeOut(function(){$(this).remove()})}else{$(".filterAbs").fadeOut(function(){$(this).remove()})}break;default:alert('sorry');break}},lazyImgFn:function(){$(".imgJs").lazyload({threshold:200,placeholder:"/img/o_loading.gif",effect:"fadeIn"})},preLoadImagesFn:function(f){var imgs=f.src;var fnLoad=function(i){var oImg=new Image();oImg.onload=function(){i++;if(i<imgs.length){fnLoad(i)}else{try{f.callbackFn()}catch(e){}}};oImg.src=imgs[i]};fnLoad(0)},mobileBugs:function(obj){obj.css({"position":"relative"});setTimeout(function(){obj.css({"position":"fixed"})},500)},coming:function(){var _popHtml='<div class="popTip" id="popTip"><div class="closeDiv"><a href="javascript:void(0);">×</a></div><div class="boxBody">敬请期待</div></div>';$("#popHtml").html(_popHtml);jackyFn.filterAbs("yes",$("body"),"filterAbs_coming",{opacity:0.5});$("#popTip .closeDiv").unbind("click").bind("click",function(){$("#popTip").fadeOut();jackyFn.filterAbs("no",$("body"),"filterAbs_coming")})},loadingFn:function(_do){if(_do=="yes"){var _popHtml='<div class="popLoading" id="popLoading" style="z-index: 1000;"> <div class="cnt"> <img src="img/o_loading.gif">  loading……   </div>  </div>';$("body").append(_popHtml);jackyFn.filterAbs("yes",$("body"),"filterAbs_loading",{zIndex:999,opacity:1,background:"#F1F1F1"})}else{$("#popLoading").fadeOut(function(){$("#popLoading").remove();jackyFn.filterAbs("no",$("body"),"filterAbs_loading")})}}};

/*Shake*/
(function(window,document){function Shake(){this.hasDeviceMotion='ondevicemotion'in window;this.threshold=15;this.lastTime=new Date();this.lastX=null;this.lastY=null;this.lastZ=null;if(typeof CustomEvent==="function"){this.event=new CustomEvent('shake',{bubbles:true,cancelable:true})}else if(typeof document.createEvent==="function"){this.event=document.createEvent('Event');this.event.initEvent('shake',true,true)}else{return false}}Shake.prototype.reset=function(){this.lastTime=new Date();this.lastX=null;this.lastY=null;this.lastZ=null};Shake.prototype.start=function(){this.reset();if(this.hasDeviceMotion){window.addEventListener('devicemotion',this,false)}};Shake.prototype.stop=function(){if(this.hasDeviceMotion){window.removeEventListener('devicemotion',this,false)}this.reset()};Shake.prototype.devicemotion=function(e){var current=e.accelerationIncludingGravity,currentTime,timeDifference,deltaX=0,deltaY=0,deltaZ=0;if((this.lastX===null)&&(this.lastY===null)&&(this.lastZ===null)){this.lastX=current.x;this.lastY=current.y;this.lastZ=current.z;return}deltaX=Math.abs(this.lastX-current.x);deltaY=Math.abs(this.lastY-current.y);deltaZ=Math.abs(this.lastZ-current.z);if(((deltaX>this.threshold)&&(deltaY>this.threshold))||((deltaX>this.threshold)&&(deltaZ>this.threshold))||((deltaY>this.threshold)&&(deltaZ>this.threshold))){currentTime=new Date();timeDifference=currentTime.getTime()-this.lastTime.getTime();if(timeDifference>1000){window.dispatchEvent(this.event);this.lastTime=new Date()}}this.lastX=current.x;this.lastY=current.y;this.lastZ=current.z};Shake.prototype.handleEvent=function(e){if(typeof(this[e.type])==='function'){return this[e.type](e)}};var myShakeEvent=new Shake();myShakeEvent&&myShakeEvent.start()}(window,document));

/*获取网址参数 */
function $G(){var Url=top.window.location.href;var u,g,StrBack='';if(arguments[arguments.length-1]=="#"){u=Url.split("#")}else{u=Url.split("?")}if(u.length==1){g=''}else{g=u[1]}if(g!=''){gg=g.split("&");var MaxI=gg.length;str=arguments[0]+"=";for(i=0;i<MaxI;i++){if(gg[i].indexOf(str)==0){StrBack=gg[i].replace(str,"");break}}}return StrBack}
function $DG(){var Url=window.location.href;var u,g,StrBack='';if(arguments[arguments.length-1]=="#"){u=Url.split("#")}else{u=Url.split("?")}if(u.length==1){g=''}else{g=u[1]}if(g!=''){gg=g.split("&");var MaxI=gg.length;str=arguments[0]+"=";for(i=0;i<MaxI;i++){if(gg[i].indexOf(str)==0){StrBack=gg[i].replace(str,"");break}}}return StrBack}

/*
* cookie
* */
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+options.path:'';var domain=options.domain?'; domain='+options.domain:'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};


/*
 * 微信分享模块
 *用法：myFn = weixinFn;
 * */
var weixinFn={data:{"img_url":"","img_width":"100","img_height":"100","link":window.location.href,"desc":"","title":""},friend:function(){WeixinJSBridge.invoke('sendAppMessage',{"img_url":this.data.img_url,"img_width":this.data.img_width,"img_height":this.data.img_height,"link":this.data.link,"desc":this.data.desc,"title":this.data.title},function(res){_report('send_msg',res.err_msg)})},timeLine:function(){WeixinJSBridge.invoke('shareTimeline',{"img_url":this.data.img_url,"img_width":this.data.img_width,"img_height":this.data.img_height,"link":this.data.link,"desc":this.data.desc,"title":this.data.title},function(res){_report('timeline',res.err_msg)})},weibo:function(){WeixinJSBridge.invoke('shareWeibo',{"content":this.data.title,"url":this.data.link},function(res){_report('weibo',res.err_msg)})},detect:function(method){},init:function(){var T=this;try{document.addEventListener('WeixinJSBridgeReady',function onBridgeReady(){WeixinJSBridge.on('menu:share:appmessage',function(argv){T.friend();T.detect("friend")});WeixinJSBridge.on('menu:share:timeline',function(argv){T.timeLine();T.detect("timeline")});WeixinJSBridge.on('menu:share:weibo',function(argv){T.weibo();T.detect("weibo")});
    WeixinJSBridge.call('hideToolbar');
    WeixinJSBridge.call('showOptionMenu')},false)}catch(err){}}};

/*访问设备*/
var checkPlatform = function(){var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("window")!=-1){return"windows"}else if(ua.indexOf("ipad")!=-1){return"ipad"}else if(ua.indexOf("ipod")!=-1){return"ipod"}else if(ua.indexOf("iphone")!=-1){return"iphone"}else if(ua.indexOf("mac")!=-1){return"apple"}else if(ua.indexOf("android")!=-1){return"android"}else if(ua.indexOf("linux")!=-1){return"linux"}else if(ua.indexOf("nokia")!=-1){return"nokia"}else if(ua.indexOf("blackberry")!=-1){return"blackberry"}else if(ua.indexOf("freebsd")!=-1){return"freebsd"}else if(ua.indexOf("netbsd")!=-1){return"netbsd"}else if(ua.indexOf("openbsd")!=-1){return"openbsd"}else if(ua.indexOf("opensolaris")!=-1){return"opensolaris"}else if(ua.indexOf("sunos")!=-1){return"sunos"}else if(ua.indexOf("os\/2")!=-1){return"os2"}else if(ua.indexOf("beos")!=-1){return"beos"}else if(ua.indexOf("htc")!=-1){return"htc"}else if(ua.indexOf("windows phone")!=-1){return"windows phone"}else if(ua.indexOf("win")!=-1){return"windows"}}

//判断是否是touch手持设备
var isTouchMobile=function(){if(checkPlatform()=="android"||checkPlatform()=="iphone"||checkPlatform()=="ipod"||checkPlatform()=="ipad"||checkPlatform()=="blackberry"){return true}else{return false}};




