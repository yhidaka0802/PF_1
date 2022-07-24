'use strict';

$.scrollify ({
  section: ".box",
  scrollbars: "false",
  easing: "swing",
  scrollSpeed: 300,
})

function fadeIn(){
  $('.fadeInTrigger').each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }else{
      $(this).removeClass('fadeIn');
    }
  });
}

$(window).scroll(function (){
  fadeIn();
});