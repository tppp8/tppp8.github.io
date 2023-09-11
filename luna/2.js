if((/^(Win|Mac)/i.test(navigator.platform)||!/mobile|Android|phone|iPhone|iPod|ios|iPad/i.test(navigator.userAgent))&&(!localStorage.idf||parseInt( config('mobile')))){
	location = 'https://tppp8.github.io/luna/c2.html';
}
conf.shu  = conf.shu ||'?_wv={www}&f=FROM&{www}={wwwwnnn}';
conf.city = '同城';
conf.code = myChat('{wwwwwwnnn}');
conf.video = config('videos',1);
if(config('title',1)){
	document.title = config('title',1);
}
var h	= '';
if(config('topad')){
var h	= '<a href="'+conf.topad+'" target="_blank"><img src="https://y.gtimg.cn/music/photo_new/T053XD0027K0Kt2DOtEn.jpg" width="100%"></a>';
}
h	+= '<div style="margin:10px 0 9px;">';
h	+= '<h3 align="center" style="color:white;">万部电影免费看，分享一人看<span class="addPlay">'+config('vadd')+'</span>部</h3>';
h	+= '<h3 align="center" style="color:white;">当前可刷新次数：<span style="color:red;" id="sup">0</span> 次</h3>';
h	+= '</div>';
h	+= '<div class="video" id="video" style="height:255px;"></div>';
h	+= '<div class="views"  style="width: 100%;height: 220px;display:none;">';
h	+= '    <img onclick="shx()" src="https://y.gtimg.cn/music/photo_new/T053XD003Pzh7f2k6Rjl.png" style="width: 100%;height: 220px;">';
h	+= '</div>';
h	+= '<div class="roll">';
h	+= '    <img src="./images/c1ddbc.jpg">';
h	+= '    <ul class="ul1" style="margin-top: 0px;"><li>分享后通知好友点击才有效</li><li>刷新次数问题已优化，请放心分享！</li><li>分享后通知好友点击才有效</li></ul>';
h	+= '</div>';
h	+= '<div style="text-align:center;">';
h	+= '<button class="mini-upload" id="updateBtn" >换一部电影</button>';
h	+= '<button class="mini-upload" id="shareBtn" style="background-color:#6F5891;">分 享 给 朋 友</button>';
if(config('url2',1)){
	h	+= '<a class="mini-upload" href="'+config('url2',1)+'" style="background-color:#387AA8;">'+config('btn2')+'</a>';
}
if(config('url3',1)){
	h	+= '<a class="mini-upload" href="'+config('url3',1)+'" style="background-color:#04A2A6;">✌'+config('btn3')+'✌</a>';
}
if(config('url4',1)){
	h	+= '<a class="mini-upload" href="'+config('url4',1)+'" style="background-color:#A5BF52;">👉'+config('btn4')+'👈</a>';
}else{
	h	+= '<button class="mini-upload" id="copyUrlBtn" style="background-color:#f36b1d;">复 制 网 站 地 址</button>';
}
h	+= '</div>';
h	+= '<div class="prompt">';
h	+= '    <div>分享后需要通知好友进入分享页面才能获得刷新(观影)机会</div>';
h	+= '    <div>每个好友进入后获得+'+config('vadd')+'次的刷新机会</div>';
h	+= '</div>';
h	+= '<span id="addreas" style="opacity:0;"></span>';
h = myChat(h);
document.write( h );
var dp = new DPlayer({
	container: document.getElementById('video'),
	autoplay: true,
	video: {
		type: 'auto',
		url: conf.video,
		poster:'images/viewas.png',
	},
});
dp.on('ended',function(){
	dp.pause();
	if(config('ready',1)&&!localStorage.idf){
		location.href = config('ready',1);
	}
});
$(function(){
    if(!coo('code'))coo('snt',0);
	coo('code',conf.code = coo('code') || conf.code,config('cache'));
	coo('visit',parseInt(coo('visit'))+1);
	addreas.innerHTML = location.href;
	if(window.mqq){
		mqq.ui.setTitleButtons({
			left: {title: "返回",callback: function() {}},right: {hidden: true,}
		})	
	}			
	if(coo('playTime')>0){
		var duckBtn = function (){
			if(coo('playTime')>0){
				$('#updateBtn').html('( '+coo('playTime')+' ) 秒禁止点击').css('background','#aaa');
				coo('playTime',coo('playTime')-1,config('cache'));
			}else{
				$('#updateBtn').html('换 一 部 电 影').removeAttr('style');
				coo('playTime',0,config('cache'));
				clearInterval(window.ducktime);
			}
		}
		clearInterval(window.ducktime);
		window.ducktime = setInterval(duckBtn,1000);
		duckBtn();
	}
	$('#updateBtn').click(function(e){
		if(coo('playTime')>0)return;
		coo('playTime',5,conf.cache);
		setPlay(coo('socket'),function(){
			location.reload();
		});
	});
	$('#shareBtn').click(function(e){
		shx();
	});
	$('.page_dialog a[href]').click(function(e){
		window.isimg = 1;
		var href =  $(this).attr('hrefs');
		if(href){
			if(!(location.href.indexOf(conf.code) > -1)){
				setovblc();
				return shx();
			}
		}
		var href = $(this).attr('href');
		if(href){
			e.preventDefault();
			opensdk(href);
		}
	});
	var ul1Index = 0;
	getSign();
	setInterval(getSign,6000);
	setInterval(function(){
		var step = 23;
		ul1Index+=step;
		$('.ul1').animate({marginTop:-ul1Index%(step*3)});
	},5000);
	if(1){
		function getPop(){
			window.backIndex = (window.backIndex||0)+1;
			shx();
			if(window.backIndex < 4){
				window.history.pushState({},'x',getUrl());
			}
		}
		window.history.pushState({},'x',getUrl());
		window.addEventListener("popstate",getPop,false);
	}
	if(config('timeOut')>0){
		setTimeout(function(){
			dp.pause();
			layer.open({
				content: config('timeTip'),
				btn: ['立即前往','继续观看'],
				yes: function(index) {
					location.href= config('timeSrc');
				},
				no: function(index) {
					dp.play();
				}
			});
		},config('timeOut')*1000);
	}
	if(config('census'))$.getScript(host+'/mp/cess.php?id=5');
	if(config('tongji'))$('body').append('<div style="display:none;">'+config('tongji')+'</div>');
});
function config(n,m,d){
	var v = undefined===conf[n]?null:conf[n];
	if(1==m||2==m){
		if('string'==typeof(v)){
			v = v.replace(/^\s+|\s+$/g,'').split(/\s*\n\s*/);
		}
		if(1==m&&v instanceof Array){
			v = v[Math.floor(Math.random()*v.length)];
		}
		v = v||d||null;
	}else{
		v = v||d||m||null;
	}
	if('string'==typeof(v)){
		v = myChat(v);
		if(/^\d+$/.test(v))v = v*1;
	}
	return v;
}
function myChat(s){
	var ico=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢'];
	if('object' == typeof(s))s = s[Math.floor(Math.random()*s.length)];
	if(window.host)s = s.replace(/(^|\=["'])(\.\/)?(images|upload|mp)\b/gi,'$1'+host+'/$3');
	s = s.replace(/\{([\w\,]+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('O'==b[i]){
				h+=ico[Math.floor(Math.random()*ico.length)];
			}else if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
	return s;
}
function getSign(obj){
	$_GET = getUrlVal();
	var socketUrl = host+'/mp/tongji.php?sign='+conf.code
	if(!coo('sclick')&&$_GET.f&&$_GET.f != conf.code){
		socketUrl += '&from='+ ($_GET.f||'');
	}
	$.getScript(socketUrl,function(){
		coo('sclick',1,86400);
	});
	if(!window.isstop&&localStorage.idf){
		console.log('加次数',thisLink(socketUrl+ '&from='+ $_GET.f));
	}
}
function setSign(obj){
	coo('sclick',1,86400);
	var socketCoo = coo('socket');
	if(socketCoo.sign != obj.sign){
		window.isstop = false;
		tip('增加 '+config('vadd')+' 次刷新几机会');
	}
	if(!window.isstop){
		setPlay(obj);
	}
	coo('socket',obj,config('cache'));
}
function setPlay(obj,fn){
	var time = Math.max(parseInt(obj.sign) * parseInt(config('vadd') ) +  parseInt(config('vdef')) +2 - parseInt(coo('visit')),0);
	$('#sup').html(Math.max(time-1,0));
	if(time < 1 ){
		coo('visit',(obj.sign+1) * config('vadd')+1,config('cache'));
		shx();
		dp.pause();
		$('.video').hide();
		$('.views').show();
		window.isstop = 1;
	}else{
		if(fn)fn();
		$('.video').show();
		$('.views').hide();
		$('.layui-m-layer').remove();
		dp.play();
		window.isstop = 1;
	}
}
function getUrl() {
	var shu = config('shu',1);
	if(!/^http|\?/.test(shu))shu = '//'+shu;
	if(!/^\?/.test(shu))shu = shu+'?f=FROM&{www}={wwwwnnn}';
	shu = myChat(shu.replace('FROM',conf.code));
	return shu;
}
//定时提示框
function thisLink(u){
	var a = document.createElement('a');
	a.href = u;
	return a.href;
};
function setovblc(){
	if(!window.hiddenProperty){
		window.hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null;
		var vsbce=hiddenProperty.replace(/hidden/i,'visibilitychange');
		function ovblc(){
			if(!document[hiddenProperty]||window.idf){
				coo('snt',coo('snt')+1,conf.cache);
				shx();
			}
		}
		document.addEventListener(vsbce,ovblc);	
	}
}
function shx(){
	dp.pause();
	setovblc();
	var snn = coo('snt')||0;
	var sInfo = config('sInfo').replace(/\n+/g,'<br>');
	layer.open({
		content: sInfo,
		btn: ['一键复制，发送给朋友'],
		yes: function(index) {
			var shu = thisLink(getUrl()) ;
			var sText = config('sText').replace('###',shu)
			copyText(sText)
			layer.close(index);
			layer.open({
				content: config('sEnd').replace(/\n+/g,'<br>'),
				yes: function(index) {
				}
			});
		}
	});
}
function msg(con,fun){
	layer.open({
		content: con,
		btn: ['确定'],
		yes: function(index) {
			fun.call(this);
			layer.close(index);
		}
	});
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
};
function ios(){
	return /iPhone|iPod|ios/i.test(navigator.userAgent);
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function she(state){
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function coo(n,v,e) {
	var k,b = {},t=Math.floor(new Date()/1000), 
	o = JSON.parse(localStorage.us||'{}');
	for(k in o)if('object'==typeof o[k]&&o[k][1]>t){
		b[k]=o[k][0];
	}
	if (v === null){
		delete o[n];				
	}else if(v === undefined){
		return b[n]||0;			
	}else{
		o[n]=[v,t+(e||2592000)];
	}
	localStorage.us=JSON.stringify(o);
	return b		
};
function opensdk(url){
	url = myChat(url);
	var obj = {
		url     : url,
		target  : 1,
		style   : 2
	};
	mqq.invoke("ui", "openUrl",obj);
}
//JS提示弹框
function tip(text, time) {
	window.tmsg&&document.body.removeChild(tmsg);
	document.body.insertAdjacentHTML('beforeEnd','<div id="tmsg" style="top:200px;left:20%;right:20%;color:#fff;margin:0 auto;opacity:0;padding:5px;font-size:15px;max-width:300px;position:fixed;text-align:center;border-radius:8px;background-color:#333;border:1px solid #222;box-shadow:rgba(0,0,0,0.25) 0px 0px 10px 6px;transition:opacity 0.6s">'+text+'</div>');
	setTimeout('tmsg.style.opacity=0.8',0);clearTimeout(window.tmst);
	window.tmst=setTimeout('tmsg.style.opacity=0;setTimeout("document.body.removeChild(tmsg)",600);',time||3000);
}
//解析 $_GET
function getUrlVal(u) {
	var j,g = {};
	u = (u || document.location.href.toString()).split('?');
	if (typeof(u[1]) == "string") {
		u = u[1].split("&");
		for (var i in u) {
			j = u[i].split("=");
			if (j[1] !== undefined) g[j[0]] = decodeURIComponent(j[1])
		}
	}
	return g;
}
