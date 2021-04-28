"use strict";



// スライドショー
// let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

// let imgSlide = [
// 	{ src: './images/spring/sakura.jpg'},
// 	{ src: './images/summer/summer.jpg'},
// 	{ src: './images/autumn/fall.jpg'},
// 	{ src: './images/winter/fuyu.jpg'},
// ];


// $('#slider').vegas({
// 	overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',
// 	transition: 'blur',
// 	transitionDuration: 2000,
// 	delay: 10000,
// 	animationDuration: 20000,
// 	animation: 'kenburns',
// 	slides: imgSlide,
// });


let nowPage = 0;
let nextPage = 1;

const slides = $("#slider").find("img");
const slideLength = slides.length;

const fadeTime = 1500;
const showTime = 3000;

slides.hide();
slides.eq(0).show();

const slidesshow = () => {

		slides.eq(nowPage % slideLength).fadeOut(fadeTime).removeClass("zoom");
		slides.eq(nextPage % slideLength).fadeIn(fadeTime).addClass("zoom");

		nowPage++;
		nextPage++;
};

setInterval(slidesshow, showTime);

let fade = $('.fade');

$(window).scroll(function () {

		if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
				fade.addClass("blur");

		} else {
				fade.removeClass("blur");

		}
});



