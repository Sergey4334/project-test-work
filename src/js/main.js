//import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';
import '../../node_modules/slick-slider/slick/slick.js';
import '../../node_modules/slick-slider/slick/slick.scss';
import '../assets/inputmask.min';
import '../assets/just-validate.min';
import '../assets/script';

import '../scss/main.scss';
import '../index.html';

$(function ($) {

  "use strict";

  let $window = $(window);
  let windowsize = $(window).width();

$('.link__menu--item').on('click', function () {
    $('#burger-check').prop('checked', true)
// удалим состояние checked 
    $('#burger-check').prop('checked', false)
});

  /* ====================================
   Nav Fixed On Scroll
   ======================================= */

  if ($("header.header").hasClass("static-nav")) {
      $window.scroll(function () {
          var $scroll = $window.scrollTop();
          var $navbar = $(".static-nav");
          if ($scroll >= 70) {
              $navbar.addClass("fixed-menu");
          } else {
              $navbar.removeClass("fixed-menu");
          }
      });
  }
  
  $('.reviews-block').slick({
      dots: true,
      speed: 500,
      infinite: true,
      fade: true,
      autoplay: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
              }
          }
      ]
  });

});
