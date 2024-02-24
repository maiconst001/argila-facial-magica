$(function (a) {
  "use strict";
  var t = a(window),
    e = a("body");
  a(".navigation .navbar-nav a").on("click", function (t) {
    var e = a(this);
    a("html, body")
      .stop()
      .animate({ scrollTop: a(e.attr("href")).offset().top - 80 }, 1e3),
      t.preventDefault();
  }),
    a(".nav-link").on("click", function () {
      a(".navbar-collapse").collapse("hide");
    }),
    a("[data-countdown]").each(function () {
      var t = a(this),
        e = a(this).data("countdown");
      t.countdown(e, function (a) {
        t.html(
          a.strftime(
            "<span>%D <small>Days</small></span> <span>%H <small>Hrs</small></span>  <span>%M <small>Min</small></span> <span>%S <small>Sec</small></span>"
          )
        );
      });
    });
  var s = a("html, body"),
    o = a(".bottomtotop");
  o.hide(),
    t.on("scroll", function () {
      t.scrollTop() > 300 ? o.fadeIn("slow") : o.fadeOut("slow"),
        t.scrollTop() > 0
          ? a(".navigation").addClass("stiky-nav")
          : a(".navigation").removeClass("stiky-nav");
    }),
    o.on("click", function () {
      return s.animate({ scrollTop: 0 }, 600), !1;
    }),
    e.scrollspy({ target: "#mainmenu", offset: 100 }),
    a(".video-play-btn").magnificPopup({ type: "video" }),
    a(".img-popup").magnificPopup({ type: "image" }),
    a(".hero_slider").owlCarousel({
      loop: !0,
      nav: !1,
      autoplay: !0,
      dots: !0,
      margin: 30,
      autoplayTimeout: 8e3,
      smartSpeed: 1200,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        950: { items: 1 },
        960: { items: 1 },
        1200: { items: 1 },
      },
    }),
    a(".deal-slider").owlCarousel({
      loop: !0,
      nav: !1,
      autoplay: !1,
      dots: !1,
      margin: 30,
      autoplayTimeout: 3e3,
      smartSpeed: 1200,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        950: { items: 1 },
        960: { items: 1 },
        1200: { items: 1 },
      },
    }),
    a(".testimonial-slider").owlCarousel({
      loop: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      nav: !0,
      dots: !1,
      margin: 30,
      autoplayTimeout: 6e3,
      smartSpeed: 1200,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        950: { items: 1 },
        960: { items: 2 },
        1200: { items: 2 },
      },
    }),
    a(".product-slider").owlCarousel({
      loop: !0,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: !1,
      margin: 30,
      autoplay: !1,
      autoplayTimeout: 8e3,
      smartSpeed: 1500,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 3 },
        1920: { items: 3 },
      },
    }),
    a(".twitte-slider").owlCarousel({
      loop: !0,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: !1,
      margin: 30,
      autoplay: !0,
      center: !0,
      autoplayTimeout: 2500,
      smartSpeed: 1500,
      responsive: { 0: { items: 1 }, 576: { items: 1 } },
    }),
    t.on("load", function () {
      setTimeout(function () {
        a("#preloader").fadeOut("slow", function () {});
      }, 600);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});
