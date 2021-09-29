(function ($) {
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
            // Contact
            $('.header').html('تواصل معنا')
            $('.head').html('اذا كنت مهتم بالعمل معنا فلا تتردد فى مراسلتنا الان')
            $('.name input').attr("placeholder", "اسمك الكريم");
            $('.email input').attr("placeholder", "بريدك الالكترونى");
            $('.message textarea').attr("placeholder", "ماذا تريد ان تقول لنا؟");
            $('.submit input').attr("Value", "ارسال")
            $('.head-p').html("مؤسسة الفياض للتخليص الجمركي")
            // Footer 
            $('.footer-txt').html('جميع الحقوق محفوظة &copy; الفياض للتخليص الجمركى');
          } else {
            $('.lang ').html('عربى');
            $('body').css("direction", "ltr");
            $('body').css("text-align", "left");
            $('body').css('font-family', "'Maven', sans-serif")
            $('title').html('Al Fayad')
            $('#home').html('Home');
            $('#services').html('Services');
            $('#about').html('About');
            $('#contact').html('Contact');
             // Contact
             $('.header').html("Contact Us")
             $('.head').html("Interested to work together? Let's talk")
             $('.name input').attr("placeholder", "Name")
             $('.email input').attr("placeholder", "Email");
             $('.message textarea').attr("placeholder", "Your Message");
             $('.submit input').attr("Value", "Send")
             // About
             $('.aboutUs h1').html('Bandar Fayyad Al-Anzi Corporation for Customs Clearance and Transport')
             $('.aboutUs h2').html('You can contact us on:')
             $('.head-p').html("")

            // Footer 
            $('.footer-txt').html('Copyright &copy; 2021 Al Fayad . All rights reserved');
          }
        })
      })(jQuery);