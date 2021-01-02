// JavaScript Document
var fn = {};
fn.naviMsgClose = function() {
	var me = fn._role('j_msg_close');
	me.click(function() {
		$('#header_msg').slideUp(200);
	});
	$('.navi li').hover(function(){
		$(this).addClass('hover');	
		$(this).find('.navi_content').slideDown(200);
	},function(){
		$(this).removeClass('hover');
		$(this).find('.navi_content').stop(true,true).slideUp(200);
	});
}
fn._role = function(role) {
	return $('[data-role="' + role + '"]');
}
fn.mainViewChanger = function() {
	var MC = null, //时间轴轮换对象
	completeAnimate = true, //是否完成动画开关，默认为是
	easying = 'easeInOutExpo', //动画缓动函数
	startnum = 0, //开始播放位置
	temphtml = '', speed = '9000', mainview_canvas = $('div#main_view'), //主视觉画布
	mainview_width = mainview_canvas.width(), //主视觉宽度
	mainview_ul = mainview_canvas.find('ul:eq(0)'), //主视觉帧容器
	controlerul = mainview_canvas.find('div.controlerul'), //主视觉时间轴控制器
	mainview_length = mainview_canvas.find('li').length;
	//主视觉帧数
	var height = mainview_canvas.attr('viewHeight') || 370;
	//获取主视觉默认高度，默认高度为370
	/*************设置画布及附属dom初始化参数****************/
	mainview_canvas.css('height', height + 'px');
	//设置主视觉高度
	mainview_ul.css('width', mainview_width * mainview_length + 'px');
	//设置帧容器宽度
	controlerul.css('width', mainview_length * 40 + 'px');
	$('#controlerul_container').css('width', ((mainview_length * 40) - 14) + 'px');
	if (mainview_length > 1) {
		for (var i = 0; i < mainview_length; i++) {
			if (i == 0) {
				temphtml += '<dd><a href="javascript:;" index="' + i + '" class="actived"></a></dd>';
			} else {
				temphtml += '<dd><a href="javascript:void(0)" index="' + i + '"></a></dd>';
			}
		}
		controlerul.html(temphtml);
	}
	mainview_ul.find('li').each(function(index, element) {
		var bc = $(this).attr('backgroundcolor');
		if (!bc)
			bc = 'transparent';
		$(this).css({
			'width' : mainview_width + 'px',
			'background' : 'transparent'
		});
		var links = $(this).attr('links');
		var me = $(this);
		if (links) {
			$('<a href="' + links + '" target="_blank" style="width:100%;height:100%;left:0px;top:0px;position:absolute;display:block;z-index:60;"> </a>').appendTo(me);
		}
	});
	/*************end****************/
	/*************获取当前帧****************/
	var getCurrentFrame = function() {
		var cfi = 0;
		controlerul.find('a').each(function(index, element) {
			if ($(this).hasClass('actived')) {
				cfi = index;
			}
		});
		return cfi;
	}
	mainview_ul.find('li:gt(' + startnum + '),li:lt(' + startnum + ')').hide();
	/*******************end***********************/
	/*************设置画布播放函数****************/
	var canvasPlay = function(num) {
		if (completeAnimate) {
			completeAnimate = false;
			var cfi = getCurrentFrame();
			var mt = mainview_ul.find('li:eq(' + cfi + ')').find('div.main_view_div_text:eq(0) div');
			var mtn = mainview_ul.find('li:eq(' + num + ')').find('div.main_view_div_text:eq(0) div');
			mtn.hide();
			//mt.delay(300).animate({width:'hide'},2000,easying);
			mt.delay(100).each(function(i) {
				if (i != (mt.length - 1)) {
					$(this).delay(i * 300).animate({
						width : 'hide'
					}, 1500, easying);
				} else {
					$(this).delay(i * 300).animate({
						width : 'hide'
					}, 1500, easying);
				}
			});
			startnum = num;
			//mainview_ul.animate({left:-startnum*$('div#main_view').width()+'px'},3000,easying);
			mainview_ul.find('li:gt(' + num + '),li:lt(' + num + ')').animate({
				'width' : 'hide'
			}, 1500, easying);
			mainview_ul.find('li:eq(' + num + ')').animate({
				'width' : 'show'
			}, 1500, easying);
			if (mtn.length > 0) {
				mtn.delay(1200).each(function(i) {
					if (i != (mtn.length - 1)) {
						$(this).delay(i * 300).animate({
							width : 'show'
						}, 1500, easying);
					} else {
						$(this).delay(i * 300).animate({
							width : 'show'
						}, 1500, easying, function() {
							completeAnimate = true;
						});
					}
				});
			} else {
				completeAnimate = true;
			}
			controlerul.find('a').removeClass('actived');
			controlerul.find('a:eq(' + startnum + ')').addClass('actived');
		}
	}
	/*******************end***********************/

	/*************画布自动播放****************/
	var autoCanvasPlay = function() {
		startnum++;
		if (startnum >= mainview_length)
			startnum = 0;
		canvasPlay(startnum);
	}
	/********************end***********************/

	if (mainview_length > 1) {
		MC = setInterval(autoCanvasPlay, speed);
		controlerul.find('a').each(function(i) {
			$(this).click(function() {
				if (completeAnimate) {
					clearInterval(MC);
					MC = null;
					var p = parseInt($(this).attr('index'));
					mainview_canvas.find(':animated').stop(true, true);
					canvasPlay(p);
					MC = setInterval(autoCanvasPlay, speed);
				}
			});
		});
	}
	$(window).resize(function() {
		w = $('div#main_view').width();
		mainview_ul.stop(true, true);
		mainview_ul.find('li').css('width', w + 'px');
		mainview_ul.css('width', mainview_length * w + 'px');
		//mainview_ul.css({'left':-startnum*$('div#main_view').width()+'px'});
	});

}

fn.publicTabs = function() {
	$('[data-role="j_public_tabs"] a').on({
		'click' : function() {
			$(this).parents('[data-role="j_public_tabs"]:eq(0)').find('a').removeClass('actived').each(function(index, element) {
				$('#' + $(this).attr('data-show')).hide();
			});
			$('#' + $(this).attr('data-show')).show();
			$(this).addClass('actived');
		}
	});
	$('[data-role="j_public_tabs"] a.actived').trigger('click');

	$('[data-role="j_public_tabs"]').each(function(index, element) {
		var me = $(this);
		me.data('number', 0);
		if ($(this).parents('table').find('[data-role="prev"]').length > 0) {
			$(this).parents('table').find('[data-role="prev"]').click(function(e) {
				me.data('number', me.data('number') + 1);
				if (me.data('number') > 0) {
					me.data('number', 0);
				}
				me.find('ul:eq(0)').animate({
					left : me.data('number') * me.find('li:eq(0)').width() + 'px'
				});
			});
			$(this).parents('table').find('[data-role="next"]').click(function(e) {
				me.data('number', me.data('number') - 1);
				if (Math.abs(me.data('number')) > (me.find('li').length - 7)) {
					me.data('number', -(me.find('li').length - 7));
				}
				me.find('ul:eq(0)').animate({
					left : me.data('number') * me.find('li:eq(0)').width() + 'px'
				});
			});
		}
	});

}
/*一舟添加*/
fn.publicTabs1 = function() {
	$('[data-role="j_public_tabs1"] a').on({
		'click' : function() {
			$(this).parents('[data-role="j_public_tabs1"]:eq(0)').find('a').removeClass('actived').each(function(index, element) {
				$('#' + $(this).attr('data-show')).hide();
			});
			$('#' + $(this).attr('data-show')).show();
			$(this).addClass('actived');
		}
	});
	$('[data-role="j_public_tabs1"] a.actived').trigger('click');

	$('[data-role="j_public_tabs1"]').each(function(index, element) {
		var me = $(this);
		me.data('number', 0);
		if ($(this).parents('table').find('[data-role="prev"]').length > 0) {
			$(this).parents('table').find('[data-role="prev"]').click(function(e) {
				me.data('number', me.data('number') + 1);
				if (me.data('number') > 0) {
					me.data('number', 0);
				}
				me.find('ul:eq(0)').animate({
					left : me.data('number') * me.find('li:eq(0)').width() + 'px'
				});
			});
			$(this).parents('table').find('[data-role="next"]').click(function(e) {
				me.data('number', me.data('number') - 1);
				if (Math.abs(me.data('number')) > (me.find('li').length - 3)) {
					me.data('number', -(me.find('li').length - 3));
				}
				me.find('ul:eq(0)').animate({
					left : me.data('number') * me.find('li:eq(0)').width() + 'px'
				});
			});
		}
	});

}

fn.publicPlayer = function() {
	fn._role('j_dot_player').each(function() {
		var me = $(this), w = $(this).attr('player-width'), dot = $($(this).attr('player-dot')), html = '';
		for (var i = 0; i < $(this).find('li').length; i++) {
			html += '<a href="javascript:;" index="' + i + '"';
			if (i == 0) {
				html += ' class="actived"';
			}
			html += '>' + i + '</a>'
		}
		dot.html(html);
		dot.find('a').click(function(e) {
			me.find('ul:eq(0)').stop(true, true);
			me.find('ul:eq(0)').animate({
				'left' : -parseInt($(this).attr('index')) * parseInt(w) + 'px'
			}, 200);
			dot.find('a').removeClass('actived');
			$(this).addClass('actived');
		});
	});
}
fn._placeHolder = function(cfg) {
	var option = {
		id : '',
		text : '',
		focuscolor : '#303030',
		blurcolor : '#999',
		focusrun : function() {
		},
		blurrun : function() {
		}
	};
	for (var i in cfg) {
		if (option.hasOwnProperty(i)) {
			option[i] = cfg[i];
		}
	}
	$(option.id).live({
		focus : function() {
			$(this).attr('tempvalue', $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/) == null ? '' : $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/)[1]);
			if ($(this).attr('tempvalue') == option.text) {
				$(this).val('');
				$(this).css('color', option.focuscolor);
			} else {
				$(this).css('color', option.focuscolor);
			}
			option.focusrun();
		},
		blur : function() {
			$(this).attr('tempvalue', $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/) == null ? '' : $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/)[1]);
			if ($(this).attr('tempvalue').length < 1) {
				$(this).val(option.text);
				$(this).css('color', option.blurcolor);
			}
			option.blurrun();
		}
	});
}
fn.placeHolder = function() {
	fn._role('placeholder').each(function() {
		fn._placeHolder({
			id : $(this),
			text : $(this).val()
		});
	});
}
fn.headerFlyMenu = function() {
	$('.weblist').hover(function() {
		$(this).find('ul').slideDown(100);
	}, function() {
		$(this).find('ul').hide();
	});
}
fn.aboutIndex = function() {
	fn._role('j_party_list').each(function(index) {
		$(this).attr('index', index);
		$(this).click(function() {
			fn._role('j_party_list').removeClass('actived');
			$(this).addClass('actived');
			if (!$(this).parents('li').next('[data-role="j_party_content"]').is(':visible')) {
				$(this).parents('ul').find('[data-role="j_party_content"]:gt(' + $(this).attr('index') + '),[data-role="j_party_content"]:lt(' + $(this).attr('index') + ')').slideUp(200);
				$(this).parents('li').next('[data-role="j_party_content"]').slideDown(200);
			}
		});
	})
}
fn.aboutIntroduction = function() {
	$('.introduction_table td:even').css('background-color', '#fff');
	$('.introduction_table td:odd').css('background-color', '#f0f0f0');

}
fn.hoverShowDesc = function() {
	$('[data-role="j_hover_show"]').each(function(index, element) {
		var me = $(this);
		$(this).parents('[class^="imagedesc"]').hover(function() {
			me.slideDown();
		}, function() {
			me.stop(true, true);
			me.slideUp();
		});
	});
}
fn.businessProductsCoal = function() {
	$('.mtzfgs_select').hover(function() {
		$(this).find('ul').slideDown(100);
	}, function() {
		$(this).find('ul').stop(true, true)
		$(this).find('ul').slideUp(100);
	});
	$('.mtzfgs_select a').click(function(e) {
		$('.mtzfgs_select a').each(function(index, element) {
			$($(this).attr('data-show')).hide();
		});
		$($(this).attr('data-show')).show();
		$('.mtzfgs_select .select_name').text($(this).text());
		$('.mtzfgs_select').trigger('mouseleave');
	});
}
fn.aboutHistory = function() {
	var doScroll = function(obj, num) {
		$(obj).scrollLeft($(obj).scrollLeft() + num);
	}, timer;
	$('.history_images').each(function(index, element) {
		var w = 0, me = $(this);
		$(this).find('img').each(function(index, element) {
			w += $(this).width();
		});
		$(this).find('ul:eq(0)').width(w);
		$(this).find('a.history_images_prev').hover(function(e) {
			timer = setInterval(function() {
				doScroll(me.find('div:eq(0)'), -1)
			}, 3);
		}, function() {
			clearInterval(timer);
			timer = null;
		});
		$(this).find('a.history_images_next').hover(function(e) {
			timer = setInterval(function() {
				doScroll(me.find('div:eq(0)'), 1)
			}, 3);
		}, function() {
			clearInterval(timer);
			timer = null;
		});
	});

	//金双江
	$('.development_images').each(function(index, element) {
		var w = 0, me = $(this);
		$(this).find('img').each(function(index, element) {
		
			if(!$(this)[0].complete){
				$(this)[0].onload = function(){
					//alert(imgSize.call($(this)[0]));
					w += imgSize.call($(this)[0])+3;
					me.find('ul:eq(0)').width(w);
					
				}
				
			}else{
				w += $(this)[0].width +3;
				me.find('ul:eq(0)').width(w);
				
			}

		});

		
		
		
		$(this).find('a.development_prev').hover(function(e) {
			timer = setInterval(function() {
				doScroll(me.find('div:eq(0)'), -2)
			}, 10);
		}, function() {
			clearInterval(timer);
			timer = null;
		});
		$(this).find('a.development_next').hover(function(e) {
			timer = setInterval(function() {
				doScroll(me.find('div:eq(0)'), 2)
			}, 10);
		}, function() {
			clearInterval(timer);
			timer = null;
		});
	});
}
fn._getParam = function(url, key) {
	var escapeReg = function(source) {
		return String(source).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	};
	var reg = new RegExp("(^|&|\\?|#)" + escapeReg(key) + "=([^&]*)(&|\x24)", "");
	var match = url.match(reg);
	if (match) {
		var result = match[2].substring(match[2].length - 1, match[2].length);
		return result == '#' ? match[2].substring(0, match[2].length - 1) : match[2];
	}

	return null;
}
fn.treeMenuLocation = function() {
	var menu = fn._getParam(window.location.href, 'menu'), items = fn._getParam(window.location.href, 'item');
	if (menu) {
		$('ul.left_menu a.menu_item').removeClass('actived');
		$('ul.left_menu .second_menu').hide();
		$('ul.left_menu li.menu_li:eq(' + menu + ') a.menu_item').addClass('actived');
		$('ul.left_menu li.menu_li:eq(' + menu + ') .second_menu').show();
		if (items) {
			$('ul.left_menu .second_menu a').removeClass('actived');
			$('ul.left_menu li.menu_li:eq(' + menu + ') .second_menu a:eq(' + items + ')').addClass('actived');
		}
	}
	$('ul.left_menu a.menu_item').click(function(e) {
		if ($(this).siblings('.second_menu').is(':visible')) {
			$(this).siblings('.second_menu').hide();
		} else {
			$(this).siblings('.second_menu').show();
		}
	});
}
fn.safely = function() {
	$('.j_show_panel').click(function(e) {
		var show = $(this).prev('p');
		if ($(show).is(':visible')) {
			$(show).slideUp(100);
			$(this).removeClass('actived');
		} else {
			$(show).slideDown(100);
			$(this).addClass('actived');

		}
	});
}
fn.hdryEvent = function() {
	$('h2.hdry_title').click(function(e) {
		if ($(this).hasClass('actived')) {
			$(this).removeClass('actived');
			$(this).siblings('.content').stop(true, true);
			$(this).siblings('.content').slideUp();
		} else {
			$(this).addClass('actived');
			$(this).siblings('.content').slideDown();
		}
	});

}
fn.qkzzEvent = function() {
	$('.qkzz').each(function(index, element) {
		var li = $(this).find('.qkzz_scroller li').length, page = Math.ceil(li / 5) - 1, p = 0, me = $(this);
		$(this).find('.prev_page').click(function(e) {
			p--;
			if (p < 0)
				p = 0;
			$(me).find('.qkzz_scroller ul').animate({
				left : -p * 630 + 'px'
			}, 200);
		});
		$(this).find('.next_page').click(function(e) {
			p++;
			if (p > page)
				p = page;
			$(me).find('.qkzz_scroller ul').animate({
				left : -p * 630 + 'px'
			}, 200);
		});
	});
	
	var url = fn._getParam(window.location.href, 'year');
	if (url) {
		var text;
		$('.qkzz_scroller a').each(function(index, element) {
			if ($(this).text().replace('年', '') == url) {
				text = index;
				return true;
			}
		});
		$('.qkzz_scroller a').removeClass('actived');
		$('.qkzz_scroller a:eq(' + text + ')').addClass('actived');
		p = Math.ceil(text / 5) - 1;
		if (p < 0)
			p = 0;
		$('.qkzz_scroller ul').animate({
			left : -p * 630 + 'px'
		}, 200);
	}

	$('.image_change').hover(function() {
		$(this).find('ul').slideDown(200);
	}, function() {
		$(this).find('ul').stop(true, true)
		$(this).find('ul').slideUp(200);
	});
	$('.image_change li a').click(function(e) {
		$(this).parents('ul').siblings('.image_title').text($(this).text());
		$(this).parents('.image_change').siblings('.image_panel').html('<img src="' + $(this).attr('data-url') + '" width="195" height="265" />');
		$(this).parents('table:eq(0)').find('.j_download_link').attr('href', $(this).attr('data-link'));
	});

}
fn.tpzlEvent = function() {
	var lis = $('.image_scroll li').length,page=0;
	$('.image_scroll ul').width(lis * 770);
	$('.image_scroll .image_prev').click(function() {
		
		page--;
		if(page<0)page=0;
		$('.image_scroll ul').animate({'marginLeft':-(page * 770)+'px'},400);
	});
	$('.image_scroll .image_next').click(function() {
		page++;
		if(page>(lis-1))page=lis-1;
		$('.image_scroll ul').animate({'marginLeft':-(page * 770)+'px'},400);
	});
}
fn.spzlEvent = function(){
	$('.media_scroll li').each(function(index, element) {
        if(index%2==0 ){
			if(!$(this).hasClass('actived')){
				$(this).css('background-color','#e8e8e8');	
			}
		}
		
    });	
	var lis = $('.spzl_content li').length,page = Math.ceil(lis / 6),p=0;
	$('#spzl_prev').click(function(e) {
		p--;
		if(p<0)p=0;
		$('.spzl_content ul').stop(true,true);
		$('.spzl_content ul').animate({left:-p * 882+'px'},200);
	});
	$('#spzl_next').click(function(e) {
		p++;
		if(p>(page-1))p=page-1;
		$('.spzl_content ul').stop(true,true);
		$('.spzl_content ul').animate({left:-p * 882+'px'},200);
	});
	$('.spzl_content li').click(function(e) {
		$('.spzl_content li').removeClass('actived');
		$(this).addClass('actived');
	});
}
fn.wyfcEvent = function(){
	$('.ysfc_type li').each(function(index, element) {
        $(this).attr('index',index);
		$(this).click(function(e) {
			$('.ysfc_type li').removeClass('actived');
			$(this).addClass('actived');
			$(this).parents('.ysfc').find('dl:lt('+$(this).attr('index')+'),dl:gt('+$(this).attr('index')+')').hide();
            $(this).parents('.ysfc').find('dl:eq('+$(this).attr('index')+')').show();
			$(this).parents('.ysfc').find('dl:eq('+$(this).attr('index')+') li.actived').trigger('click');
        });
    });	
	$('.ysfc dl dt').each(function(index, element) {
		var lis = $(this).find('li').length,p = Math.ceil(lis/5),page=0,me=$(this);
        $(this).find('li').click(function(e) {
            $(this).parents('dt').siblings('dd').html('<img src="'+$(this).attr('data-image')+'" /><div class="title_bar"><div class="bg"></div><p><span class="left white yahei f14">'+$(this).attr('data-title')+'</span><span class="right white yahei f12">来源：'+$(this).attr('data-src')+'&nbsp;&nbsp;发布时间：'+$(this).attr('data-date')+'</span></p></div>');
			$(this).parents('dt').find('li').removeClass('actived');
			$(this).addClass('actived');
        });
		
		$(this).find('.ysfc_prev').click(function(e) {
        	page--;
			if(page<0)page=0;
			me.find('ul').animate({left:-(page*600)+'px'},200);  
        });
		$(this).find('.ysfc_next').click(function(e) {
            page++;
			if(page>(p-1))page=p-1;
			me.find('ul').animate({left:-(page*600)+'px'},200); 
        });
    });
	$('.ysfc dl:visible dt li.actived').trigger('click');
	
}
fn.dqjsEvent = function(){
	$('.dqjs').each(function(index, element) {
		var me = $(this)
        $(this).find('li').click(function(e) {
            if(!$(this).hasClass('actived')){
				me.find('li').removeClass('actived');	
				$(this).addClass('actived');
			}
        });
    });	
	
}
fn.footerMenu = function(){
	$('.rss_input').hover(function(){
		$(this).find('ul').slideDown(200);
	},function(){
		$(this).find('ul').stop(true,true);
		$(this).find('ul').slideUp(200);
	})
}

$(function() {
	for (fname in fn) {
		if (fname.indexOf('_') == -1) {
			fn[fname]();
		}
	}
})


function imgSize(){
   var imgObj = new Image();
   imgObj.src = this.src;
   return imgObj.width;
}