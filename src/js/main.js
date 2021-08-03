//import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';

import '../scss/main.scss';
import '../index.html';


// const a = 5;

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

  /*bottom menu fix*/
  if ($("header.header").hasClass("bottom-nav")) {
      var navHeight = $(".bottom-nav").offset().top;
      $window.scroll(function () {
          if ($window.scrollTop() > navHeight) {
              $('.bottom-nav').addClass('fixed-menu');
          } else {
              $('.bottom-nav').removeClass('fixed-menu');
          }
      });
  }
  
  /*Owl carusell*/
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     speed: 500,
  //     autoplay: true,
  //     margin:10,
  //     responsiveClass:true,
  //     responsive:{
  //         0:{
  //             items:2,
  //             nav:true
  //         },
  //         600:{
  //             items:3,
  //             nav:false
  //         },
  //         1000:{
  //             items:5,
  //             nav:true,
  //             loop:false
  //         }
  //     }
  // })

  "use strict";
  //Slider top
  // $('.responsive').slick({
  //     dots: true,
  //     speed: 500,
  //     infinite: true,
  //     fade: true,
  //     autoplay: true,
  //     cssEase: 'linear',
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     responsive: [
  //         {
  //             breakpoint: 1024,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1,
  //                 infinite: true,
  //                 dots: true
  //             }
  //         },
  //         {
  //             breakpoint: 600,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         },
  //         {
  //             breakpoint: 480,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         }
  //         // You can unslick at a given breakpoint now by adding:
  //         // settings: "unslick"
  //         // instead of a settings object
  //     ]
  // });
  // $('.reviews-block').slick({
  //     dots: true,
  //     speed: 500,
  //     infinite: true,
  //     fade: true,
  //     autoplay: true,
  //     cssEase: 'linear',
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     responsive: [
  //         {
  //             breakpoint: 1024,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1,
  //                 infinite: true,
  //                 dots: true
  //             }
  //         },
  //         {
  //             breakpoint: 600,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         },
  //         {
  //             breakpoint: 480,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         }
  //         // You can unslick at a given breakpoint now by adding:
  //         // settings: "unslick"
  //         // instead of a settings object
  //     ]
  // });
  // //Wow js
  // new WOW().init();

});
