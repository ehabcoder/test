var Arabic = true;
$( document ).ready(function() {
  if(Arabic) {
    $('#modal').trigger("click")
  }
});


(function ($) {

  "use strict";
    // HEADER
    $(".navbar").headroom();
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      rtl:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:1,
              nav:true,
              loop:false
          }
      }
  })
    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
