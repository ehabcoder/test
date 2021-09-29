
(function ($) {
    console.log("hello")
      "use strict";
        // Langulage Changer
        $('.toggle-language').click(function() {
          
          if ($('.lang').text() === 'عربى') {
            $('.lang ').html('English');
            $('body').css("direction", "rtl");
            $('body').css("text-align", "right");
            $('body').css('font-family', "'Cairo', sans-serif")
            $('title').html('الفياض')

            // Navbar change
            $('#home').html('الرئيسية');
            $('#services').html('خدماتنا');
            $('#about').html('من نحن');
            $('#contact').html('تواصل معنا');
            // About
            $('.aboutUs h1').html('مؤسسة بندر فياض العنزي للتخليص الجمركي والنقل')
            $('.aboutUs h2').html('يمكنك التواصل معنا من خلال: ')

            // Footer 
            $('.footer-txt').html('جميع الحقوق محفوظة &copy; الفياض للتخليص الجمركى');
          } else {
            $('.lang ').html('عربى');
            $('body').css("direction", "ltr");
            $('body').css("text-align", "left");
            $('body').css('font-family', "'Maven', sans-serif")
            $('title').html('Al fayad')

            $('#home').html('Home');
            $('#services').html('Services');
            $('#about').html('About');
            $('#contact').html('Contact');
             // About
             $('.aboutUs h1').html('Bandar Fayyad Al-Anzi Corporation for Customs Clearance and Transport')
             $('.aboutUs h2').html('You can contact us on:')

            // Footer 
            $('.footer-txt').html('Copyright &copy; 2021 Al Fayad . All rights reserved');
          }
        })
      })(jQuery);
  