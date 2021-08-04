//import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';
import '../../node_modules/slick-slider/slick/slick.js';
import '../../node_modules/slick-slider/slick/slick.scss';

import '../scss/main.scss';
import '../index.html';

$(function ($) {

  "use strict";

  var $window = $(window);
  var windowsize = $(window).width();

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
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

});
