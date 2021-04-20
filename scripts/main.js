"use strict";

$(() => {

  // 使用・未使用のものは適時追加・削除すること

  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, 550, "swing");
    return false;
  });





  // AOSアニメーション
  AOS.init({
    // offset: 200,
    // delay: 100,
    // duration: 1500,
    // easing: 'liner',
    // once: true,

  });

  /* =================== */
  /*   	  hamburger      */
  /* =================== */

  let hamburger = $("#js-nav_toggle");
  let hamBgc = $(".ham_bgc");
  let span = $("#js-nav_toggle span");
  let body = $("body");

  hamburger.click(function () {
    hamBgc.toggleClass("active");
    span.toggleClass("open");
    body.toggleClass("hidden");
  });

  hamBgc.click(function () {
    hamBgc.toggleClass("active");
    span.toggleClass("open");
    body.toggleClass("hidden");
  });








});