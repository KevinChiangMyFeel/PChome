// 右上輪播小AD
var mySwiper = new Swiper('.slider_box .swiper-container', {
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: 'slider_box .swiper-pagination',
	},
	mousewheel: true,
	navigation: {
		nextEl: '.slider_box .swiper-button-next',
		prevEl: '.slider_box .swiper-button-prev',
	},
});

// 全版版頭輪撥
var mainSwiper = new Swiper('#main_slider .swiper-container', {
	loop: true,
	mousewheel: false,
	allowTouchMove: mainSlider.content.length>1,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '#main_slider .swiper-pagination',
	},
	navigation: {
		nextEl: '#main_slider .swiper-button-next',
		prevEl: '#main_slider .swiper-button-prev',
	}
});

// 版頭輪播(搭配標題圖)
var mainSlider_withTitle = new Swiper('#main_slider_withTitle .swiper-container', {
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	loop: true,
	speed: 1000,
	mousewheel: false,
	pagination: {
		el: '#main_slider_withTitle .swiper-pagination',
		clickable: true,
	},
	effect: 'cube',
	cubeEffect: {
		slideShadows: false,
	},
});

function mainSwiperControl() {
	if (mainSlider.content.length < 2) {
		mainSwiper.autoplay.stop()
	}
}
mainSwiperControl()

var pdSlider = new Swiper('#pdSlider .swiper-container', {
	loop: true,
	mousewheel: false,
	slidesPerView: 6,
	spaceBetween: 20,
	speed: 1000,
	freeMode: false,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '#pdSlider .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '#pdSlider .swiper-button-next',
		prevEl: '#pdSlider .swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1366: {
			slidesPerView: 5,
			spaceBetween: 15,
		},

	},
});

// 主會場左側選單
$('.left_menu .arrow_box').click(function () {
	$('.left_menu .arLeft').toggleClass('rotate');
	$('.left_menu .menu_box').toggleClass('gohide');
});
$('li.subevent a, .menuMask').click(function () {
	$('.left_menu .menu_box, .menuMask').toggleClass('show');
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.left_menu').addClass('campaignMenuFixed');
	} else {
		$('.left_menu').removeClass('campaignMenuFixed');
	}
});

// 右側邊欄控制
$(window).scroll(function () {
	if ($(window).scrollTop() >= 10) {
		$('.right_box').addClass('show');
	} else {
		$('.right_box').removeClass('show');
	}
});

// 選單置頂
$(window).scroll(function () {
	if ($(window).scrollTop() >= 110) {
		$('.navbox').addClass('subfixed');
	} else {
		$('.navbox').removeClass('subfixed');
	}
});

// 行動裝置選單
$('.navbar-toggler').click(function () {
	$(this).toggleClass('is-open');
	$('.nav_wrap, .nav_mb').toggleClass('visible');
	$('.menuMask').toggleClass('cover-bg');
	$('body, html').toggleClass('act');
});
if ($(window).width() < 769) {
	mbMenu();
}
function mbMenu() {
	$('.nav_wrap ul li').click(function () {
		$(this).nextAll('li').removeClass('act');
		$(this).prevAll('li').removeClass('act');
		$(this).toggleClass('act');
	});
}

// hashtag Smooth scrolling
var $clickTag = $('area[href^="#"], .menu_box a[href^="#"], .gotop a.pc[href^="#"], a.gotheme');
$clickTag.click(function () {
	var target = $(this.getAttribute('href'));
	if ($(window).width() < 768) {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 300);
		}
		return false;
	} else {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
		return false;
	}
});
$('.gotop a.mb[href^="#"]').click(function () {
	event.preventDefault();
	jQuery("html,body").animate({
		scrollTop: 0
	}, 300);
});

// modal 影片
var $videoSrc;
$('.video-btn').click(function () {
	$videoSrc = $(this).data("src");
});
$('#video_box').on('shown.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
});
$('#video_box').on('hide.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc);
})

// 動態捕捉主色系
$('.nav_wrap>.main_menu>li').hover(function(){
	$(this).children('a').css('background-color',webInfo.menuColor)
},function(){
	$(this).children('a').css('background-color','')
})
$('ul.promo a').hover(function(){
	$(this).css('border-color',webInfo.mainColor)
},function(){
	$(this).css('border-color','')
})
$('ul.promo a').hover(function(){
	$(this).children('.hotline').css('background',webInfo.mainColor)
},function(){
	$(this).children('.hotline').css('background','')
})
$('ul.promo .icon').css('background',webInfo.mainColor)

// 如果a連結的href為空值就移除
var getLink_a = document.querySelectorAll("a")
getLink_a.forEach(function (item) {
	if(!item.getAttribute('href')) {
		item.removeAttribute('href')
		console.log('移除空值的href',item);
	}
})

// 如果選單是連結(沒下拉選單)就加入target
var getMenu = document.querySelectorAll(".main_menu>li>a")
getMenu.forEach(function(item){
	if( item.getAttribute('href') ) {
		item.setAttribute('target','_blank')
	}
})

