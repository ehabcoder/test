
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
            $('title').html("الفياض")
            // Navbar change
            $('#home').html('الرئيسية');
            $('#services').html('خدماتنا');
            $('#about').html('من نحن');
            $('#contact').html('تواصل معنا');
            // Services
            $('.services-lang h1').html('ماذا نقدم لك؟')
            $('.services-lang p').html('مكتب الفياض للتخليص الجمركى والنقل');
            $('.services-lang small').html('سرعة ,مهارة')
            $('.A1').html('استخراج شهادات سابر و التسجيل بالهيئة')
            $('.A2').html('المساعدة في تجهيز كامل الاوراق اللازمة للتخليص الجمركي')
            $('.A3').html('ما يميزنا التواصل مع الشاحن قبل شحن البضائع')
            $('.A4').html('تخليص البضائع الواردة والصادرة')
            $('.A5').html('نقل الحاويات و الشحنات الي كل اماكن المملكة')
            $('.A6').html('ساحات تخزين جاف و مبرد')
            $('.A7').html('التسجيل بمواقع فسح و سابر')
            $('.A8').html('تسهيل كافة المعاملات الجمركية')

            // Footer 
            $('.footer-txt').html('جميع الحقوق محفوظة &copy; الفياض للتخليص الجمركى');
          } else {
            $('.lang ').html('عربى');
            $('body').css("direction", "ltr");
            $('body').css("text-align", "left");
            $('body').css('font-family', "'Maven', sans-serif")
            $('title').html("الفياض")

            $('#home').html('Home');
            $('#services').html('Services');
            $('#about').html('About');
            $('#contact').html('Contact');
            // Services
            $('.services-lang h1').html('Our Services')
            $('.services-lang p').html('Al Fayad Office for Customs Clearance and Transport');
            $('.services-lang small').html('')
            $('.A1').html('Obtaining Saber certificates and registering with the authority')
            $('.A2').html('Assistance in preparing all the necessary documents for customs clearance')
            $('.A3').html('What distinguishes us is to communicate with the shipper before shipping the goods')
            $('.A4').html('Clearance of incoming and outgoing goods')
            $('.A5').html('Transporting containers and trucks to all parts of the Kingdom')
            $('.A6').html('Dry and cold storage yards')
            $('.A7').html('Registration on Fasah and Saber')
            $('.A8').html('Facilitate all customs transactions')

            // Footer 
            $('.footer-txt').html('Copyright &copy; 2021 Al Fayad . All rights reserved');
          }
        })
      })(jQuery);
  