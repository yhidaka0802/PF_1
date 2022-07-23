'use srict';

$(function() {
  $('.slider')
  .on('init', function() {
    $('.slick-slide[data-slick-index="0"]').addClass('add-animation');
  })
  .slick ({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
    slideToShow: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide){
      $('.slick-slide', this).eq(nextSlide).addClass('add-animation');
      $('.slick-slide', this).eq(currentSlide).addClass('remove-animation');
    },
    afterChange: function(){
      $('.remove-animation', this).removeClass('remove-animation add-animation');
    },
  });
});