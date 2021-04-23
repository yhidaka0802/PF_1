"use strict";

$(() => {

  // 使用・未使用のものは適時追加・削除すること

  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, 550, "swing");
    return false;
  });


});







let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
	var responsiveImage = [
		{ src: './images/spring/sakura.jpg'},
		{ src: './images/summer/summer.jpg'},
		{ src: './images/autumn/fall.jpg'},
		{ src: './images/winter/fuyu.jpg'},
	];
} else {
	var responsiveImage = [
		{ src: './images/other/bg_01.jpg' },
		{ src: './images/other/bg_02.jpg' },
		{ src: './images/other/bg_03.jpg' }
	];
}




$('#slider').vegas({
	overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',
	transition: 'blur',
	transitionDuration: 2000,
	delay: 10000,
	animationDuration: 20000,
	animation: 'kenburns',
	slides: responsiveImage,
});





$.scrollify({
	section : ".box",
	scrollbars:"false",
	interstitialSection : "#header",
	easing: "swing",
	scrollSpeed: 300,
	
	before:function(i,panels) {
		let ref = panels[i].attr("data-section-name");
		$(".pageChange .active").removeClass("active");
		$(".pageChange").find("a[href=\"#" + ref + "\"]").addClass("active");
	},
	afterRender:function() {
		let pageChange = "<ul class=\"pageChange\">";
		let activeClass = "";
		$(".box").each(function(i) {
			activeClass = "";
			if(i===$.scrollify.currentIndex()) {
				activeClass = "active";
			}
			pageChange += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"textOpacity\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
		});
		pageChange += "</ul>";
		$("#season").append(pageChange);
		$(".pageChange a").on("click",$.scrollify.move);
	}
});

	function fadeAnime(){
		$('.eleIn').each(function(){
			let elemPos = $(this).offset().top-50;
			let scroll = $(window).scrollTop();
			let windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				$(this).addClass('blur');
			}else{
				$(this).removeClass('blur');
			}
		});	
	}

function textSepaControl() {
	$('.textSepa').each(function () {
		let elemPos = $(this).offset().top - 50;
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("in");
		} else {
			$(this).removeClass("in");
		}
	});
}

$(window).scroll(function () {
	textSepaControl();
	fadeAnime();
});

$(window).on('load', function () {
	let bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#fff',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {		
		style: {
			padding: '0',
			margin: '-30px 0 0 0',
			'font-size':'1rem',
			color: '#fff',
			transform:'translate(-50%,-50%)',
			position: 'absolute',
			top: '50%',
			left: '50%',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loaderBg-up").addClass("coveranime");
	$(".loaderBg-down").addClass("coveranime");
	$("#splash").fadeOut('slow',function(){
		let element = $(".textSepa");
		let textbox;
		element.each(function () {
			let text = $(this).text();
			textbox = [];
			text.split('').forEach(function (t, i) {
				if (t !== " ") {
					if (i < 10) {
						textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
					} else {
						n = i / 10;
						textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
					}

				} else {
					textbox += t;
				}
			});
			$(this).html(textbox);
		});
		textSepaControl();    
		fadeAnime();
    });
	});
    
});
