'use strict';

var current;
$.scrollify ({
  section: ".box",
  scrollbars: false,
  easing: "swing",
  scrollSpeed: 600,
  before:function(i,box){
    current = i
    $('.pagenation .active').removeClass('active');
    $('.pagenation').find('a').eq(i).addClass('active');
  },
  afterRender:function(){
    var pagenation = '<ul class="pagenation">';
    $('.box').each(function(i){
      pagenation += '<li><a></a></li>';
    });
    pagenation += '</ul>';
    $('body').append(pagenation);
    $('.pagenation li').each(function(i){
      $(this).on('click',function(){
        $.scrollify.move(i);
      });
    });
    $('.pagenation li:first-child').find('a').addClass('active');
  },
});
$(window).on('resize',function(){
  if(current){
    let currentScrl = $('.box').eq(current).offset().top;
    $(window).scrollTop(currentScrl);
  }
});


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

function BlurTextAnimeControl(){
  $('.blurTrigger').each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('blur');
    }else{
      $(this).removeClass('blur');
    }
  });
}
$(window).on('load', function (){
  BlurTextAnimeControl();
});

function slideAnime(){
  $('.leftAnime').each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').addClass('slideAnimeRightLeft');
    }else{
      $(this).removeClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').removeClass('slideAnimeRightLeft');
    }
  });
}
$(window).scroll(function (){
  slideAnime();
});

function fadeUp(){
  $('.fadeUpTrigger').each(function(){
    let elemPos = $(this).offset().top+200;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
    }else{
      $(this).removeClass('fadeUp');
    }
  });
}
$(window).scroll(function (){
  fadeUp();
});


$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});

$("#g-nav a").click(function(){
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});

