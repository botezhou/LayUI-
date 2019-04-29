var navwidth = snavwidth = mnavwidth = tnavwidth = ismobile = '';
navwidth = '230px';
snavwidth = '60px';
mnavwidth = '0px';
tnavwidth = 300;
ismobile = goPAGE();
layui.use(['element', 'layer'], function() {
	var element = layui.element,
		layer = layui.layer;
	element.on('nav(layadmin-layout-left)', function(elem) {
		var event = elem[0].getAttribute('layadmin-event');
		switch (event) {
			case 'flexible':
				$('#LAY_app_flexible').toggleClass('layui-icon-spread-left');
				$('#LAY_app_flexible').toggleClass('layui-icon-spread-right');
				if (ismobile) {
					$('#LAY_app_body').width(document.body.clientWidth + 'px');
					if ($('#LAY_app_flexible').hasClass('layui-icon-spread-left')) {
						$('#LAY_app').animate({
							'width': mnavwidth
						}, tnavwidth);
						$('#LAY_WRAP .layui-body').animate({
							'left': mnavwidth
						}, tnavwidth);
						$('#mobilenav').removeClass('mobilenav')
					} else {
						$('#LAY_app').animate({
							'width': navwidth
						}, tnavwidth);
						$('#LAY_WRAP .layui-body').animate({
							'left': navwidth
						}, tnavwidth);
						$('#LAY_app').removeClass('layadmin-side-shrink');
						$('#mobilenav').addClass('mobilenav')
					}
				} else {
					if ($('#LAY_app_flexible').hasClass('layui-icon-spread-left')) {
						$('#LAY_app').animate({
							'width': snavwidth
						}, tnavwidth);
						$('#LAY_WRAP .layui-body').animate({
							'left': snavwidth
						}, tnavwidth);
						$('#LAY_app').addClass('layadmin-side-shrink')
					} else {
						$('#LAY_app').animate({
							'width': navwidth
						}, tnavwidth);
						$('#LAY_WRAP .layui-body').animate({
							'left': navwidth
						}, tnavwidth);
						$('#LAY_app').removeClass('layadmin-side-shrink')
					}
				}
				break
			case 'refresh':
			    window.location.reload();
				break
		}
	});
	element.on('nav(layadmin-layout-right)', function(elem) {
		var event = elem[0].getAttribute('layadmin-event');
		switch (event) {
			case 'theme':
				$('#setbgcolor').css('display', 'block');
				break
		}
	});
	
	$(".layui-nav-left li").mouseover(function() {
		if ($('#LAY_app_flexible').hasClass('layui-icon-spread-left')) {
			var that = this;
			layer.tips($(this).find('cite').html(), that, {
				time: 0
			})
		}
	});
	$(".layui-nav-left li").mouseleave(function() {
		if ($('#LAY_app_flexible').hasClass('layui-icon-spread-left')) {
			layer.closeAll('tips')
		}
	});
	element.on('nav(layui-nav-left)', function(elem) {
		if ($('#LAY_app_flexible').hasClass('layui-icon-spread-left')) {
			layer.closeAll('tips');
			$('#LAY_app_flexible').removeClass('layui-icon-spread-left');
			$('#LAY_app_flexible').addClass('layui-icon-spread-right');
			$('#LAY_app').animate({
				'width': navwidth
			}, tnavwidth);
			$('#LAY_WRAP .layui-body').animate({
				'left': navwidth
			}, tnavwidth);
			$('#LAY_app').removeClass('layadmin-side-shrink')
		}
	})
});
if (ismobile) {
	$('#mobilenav').removeClass('mobilenav');
	$('#LAY_app_body').width(document.body.clientWidth + 'px');
	if ($('#LAY_app_flexible').hasClass('layui-icon-shrink-right')) {
		$('#LAY_app_flexible').removeClass('layui-icon-spread-right');
		$('#LAY_app_flexible').addClass('layui-icon-spread-left');
		$('#LAY_app').attr('style', 'width:' + mnavwidth);
		$('#LAY_WRAP .layui-body').attr('style', 'left:' + mnavwidth);
		$('#LAY_app').removeClass('layadmin-side-shrink');
		$('#mobilenav').removeClass('mobilenav')
	}
}
window.onresize = function() {
	ismobile = goPAGE();
	$('#mobilenav').removeClass('mobilenav');
	if (ismobile) {
		$('#LAY_app_body').width(document.body.clientWidth + 'px');
		if ($('#LAY_app_flexible').hasClass('layui-icon-shrink-right')) {
			$('#LAY_app_flexible').removeClass('layui-icon-spread-right');
			$('#LAY_app_flexible').addClass('layui-icon-spread-left');
			$('#LAY_app').animate({
				'width': mnavwidth
			}, tnavwidth);
			$('#LAY_WRAP .layui-body').animate({
				'left': mnavwidth
			}, tnavwidth);
			$('#LAY_app').removeClass('layadmin-side-shrink');
			$('#mobilenav').removeClass('mobilenav')
		}
	} else {
		$('#LAY_app_body').removeAttr('style');
		if ($('#LAY_app_flexible').hasClass('layui-icon-shrink-right')) {
			$('#LAY_app_flexible').removeClass('layui-icon-spread-left');
			$('#LAY_app_flexible').addClass('layui-icon-spread-right');
			$('#LAY_app').animate({
				'width': navwidth
			}, tnavwidth);
			$('#LAY_WRAP .layui-body').animate({
				'left': navwidth
			}, tnavwidth);
			$('#LAY_app').removeClass('layadmin-side-shrink')
		}
	}
};
$('#setbgcolorshade').click(function() {
	$('#setbgcolor').css('display', 'none')
});

function clearmobilenav() {
	$('#mobilenav').removeClass('mobilenav');
	if ($('#LAY_app_flexible').hasClass('layui-icon-shrink-right')) {
		$('#LAY_app_flexible').removeClass('layui-icon-spread-right');
		$('#LAY_app_flexible').addClass('layui-icon-spread-left');
		$('#LAY_app').animate({
			'width': mnavwidth
		}, tnavwidth);
		$('#LAY_WRAP .layui-body').animate({
			'left': mnavwidth
		}, tnavwidth);
		$('#LAY_app').removeClass('layadmin-side-shrink');
		$('#mobilenav').removeClass('mobilenav')
	}
}

function goPAGE() {
	if ((navigator.userAgent.match(
			/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
		))) {
		return true
	}
	return false
}
$('#ChangeColor li').click(function() {
	$('#ChangeColor li').removeClass('layui-this');
	$(this).toggleClass('layui-this');
	var colorleve = parseInt($(this).attr('data-index'));
	setCookie('colorleve', colorleve);
	setcolorleve(colorleve)
});
if (getCookie("colorleve") != '') {
	var colorleve = (getCookie("colorleve"));
	$.each($('#ChangeColor li'), function(v, k) {
		if (v == colorleve) {
			k.setAttribute('class', 'layui-this')
		}
	});
	setcolorleve(colorleve)
} else {
	$('#ChangeColor li').eq(5).addClass('layui-this');
	setcolorleve(5)
}

function setcolorleve(colorleve) {
	colorleve = parseInt(colorleve);
	var navleft = nvatop = navright = nvarightfont = navleftclick = chancolor = '';
	navright = '#fff';
	nvarightfont = '#333';
	switch (colorleve) {
		case 0:
			navleftclick = '#009688';
			navleft = '#20222A';
			nvatop = '#20222A';
			break;
		case 1:
			navleftclick = '#3B91FF';
			navleft = '#03152A';
			nvatop = '#03152A';
			break;
		case 2:
			navleftclick = '#A48566';
			navleft = '#2E241B';
			nvatop = '#2E241B';
			break;
		case 3:
			navleftclick = '#7A4D7B';
			navleft = '#50314F';
			nvatop = '#50314F';
			break;
		case 4:
			navleftclick = '#1E9FFF';
			navleft = '#344058';
			nvatop = '#1E9FFF';
			break;
		case 5:
			navleftclick = '#0CAB8E';
			navleft = '#3A3D49';
			nvatop = '#2F9688';
			break;
		case 6:
			navleftclick = '#F78400';
			navleft = '#20222A';
			nvatop = '#F78400';
			break;
		case 7:
			navleftclick = '#AA3130';
			navleft = '#28333E';
			nvatop = '#AA3130';
			break;
		case 8:
			navleftclick = '#009688';
			navleft = '#24262F';
			nvatop = '#3A3D49';
			break;
		case 9:
			navleftclick = '#009688';
			navleft = '#20222A';
			nvatop = '#226A62';
			navright = '#2F9688';
			nvarightfont = '#f8f8f8';
			break;
		case 10:
			navleftclick = '#1E9FFF';
			navleft = '#344058';
			nvatop = '#0085E8';
			navright = '#1E9FFF';
			nvarightfont = '#f8f8f8';
			break;
		case 11:
			navleftclick = '#009688';
			navleft = '#20222A';
			nvatop = '#20222A';
			navright = '#393D49';
			nvarightfont = '#f8f8f8';
			break;
		case 12:
			navleftclick = '#7A4D7B';
			navleft = '#50314F';
			nvatop = '#50314F';
			navright = '#50314F';
			nvarightfont = '#f8f8f8';
			break;
		case 13:
			navleftclick = '#AA3130';
			navleft = '#28333E';
			nvatop = '#28333E';
			navright = '#AA3130';
			nvarightfont = '#f8f8f8';
			break;
		case 14:
			navleftclick = '#009688';
			navleft = '#28333E';
			nvatop = '#009688';
			navright = '#009688';
			nvarightfont = '#f8f8f8';
			break
	}
	chancolor = '.layui-side-scroll,.layui-bg-black,.layui-nav-left{background-color:' + navleft +
		' !important;}.layui-side-scroll .layui-logo{background-color:' + nvatop +
		' !important;}.layui-header{background-color:' + navright +
		' !important;}.layui-body .layui-header a, .layui-body .layui-header a cite{color:' + nvarightfont +
		' !important;}.layui-header .layui-nav .layui-nav-more{border-top-color:' + nvarightfont +
		' !important;}.layui-nav-tree .layui-nav-child dd.layui-this, .layui-nav-tree .layui-nav-child dd.layui-this a, .layui-nav-tree .layui-this, .layui-nav-tree .layui-this>a, .layui-nav-tree .layui-this>a:hover{background-color: ' +
		navleftclick +
		'; !important;}.layui-body .layui-header .layui-layout-right .layui-nav-child a{color:#333 !important;}';
	$('#LAY_layadmin_theme').html(chancolor)
}

function setCookie(name, value, hours) {
	var d = new Date();
	d.setTime(d.getTime() + hours * 3600 * 1000);
	document.cookie = name + '=' + value + '; expires=' + d.toGMTString()
}

function getCookie(name) {
	var arr = document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i].split('=');
		if (temp[0] == name) {
			return temp[1]
		}
	}
	return ''
}

function removeCookie(name) {
	var d = new Date();
	d.setTime(d.getTime() - 10000);
	document.cookie = name + '=1; expires=' + d.toGMTString()
}
