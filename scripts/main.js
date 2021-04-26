"use strict";



// スライドショー
let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

let imgSlide = [
	{ src: './images/spring/sakura.jpg'},
	{ src: './images/summer/summer.jpg'},
	{ src: './images/autumn/fall.jpg'},
	{ src: './images/winter/fuyu.jpg'},
];


$('#slider').vegas({
	overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',
	transition: 'blur',
	transitionDuration: 2000,
	delay: 10000,
	animationDuration: 20000,
	animation: 'kenburns',
	slides: imgSlide,
});



