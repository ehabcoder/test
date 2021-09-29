
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
  
          // Project
          $('.title h1').html('السرعة والمهارة');
          $('.title p').html('مكتب الفياض للتخليص الجمركى والنقل');
          $('.title li span').html('للاتصال: 0555168570')
  
          // About
          $('.about-h').html('مؤسسة بندر فياض العنزي للتخليص الجمركي و النقل')
          $('.about-p').html("بدأت انطلاقتنا نحو عالم التخليص الجمركي و النقل عام 1970 برخصة رقم 2758 بمسمي مؤسسة بندر فياض العنزي للتخليص و النقل و بمزيد من العمل و بناء جدار من الثقة بين شركتنا وعملائنا زادت انطلاقتنا و زاد عدد عملائنا و زاد انشطتنا في كل ارجاء المملكة من الشرق الي الغرب و من الشمال الي الجنوب و ازدادت عدد شحناتنا جوا و بحرا و برامن مطار الرياض الي الدمام بمطاراتها و موانيها و جدة و مطار وميناءو محطات السكك الحديدية و ميناء الرياض الجاف.<br> نحن من أفضل الشركات و أكثرها خبرة في مجال التخليص الجمركي و النقل و تربطنا علاقات عمل وطيدة مع نخبة من الشركات و المؤسسات التجارية و الصناعية في المملكة العربية السعودية التي نتطلع اليها جميعا عام 2030 و نهدف الي التطور فنحن نصل جميعا الي رؤية .")
          $('.about-contact').html('تواصل معنا')
          
            // Services
            $('.services-lang h1').html('ماذا نقدم لك؟')
            $('.services-lang p').html('مكتب الفياض للتخليص الجمركى والنقل');
            $('.services-lang small').html('سرعة ,مهارة')
            $('.C1').html('استخراج شهادات سابر و التسجيل بالهيئة')
            $('.C2').html('المساعدة في تجهيز كامل الاوراق اللازمة للتخليص الجمركي')
            $('.C3').html('ما يميزنا التواصل مع الشاحن قبل شحن البضائع')
            $('.C4').html('تخليص البضائع الواردة والصادرة')
            $('.C5').html('نقل الحاويات و الشحنات الي كل اماكن المملكة')
            $('.C6').html('ساحات تخزين جاف و مبرد')
            $('.C7').html('التسجيل بمواقع فسح و سابر')
            $('.C8').html('تسهيل كافة المعاملات الجمركية')
          
          // Clients
          $('.clients-h').html('أبرز عملائنا')
          $('.clients-p').html('شركاء النجاح')
          $('.A1').html('المراعي')
          $('.A2').html('الحرس الملكي')
          $('.A3').html('شركة ضوئيات')
          $('.A4').html('شركة ريتشل اند دي ماساري')
          $('.A5').html('هايبر لولو')
          $('.A6').html('هيرفي')
          $('.A7').html('الاسقمري')
          $('.A8').html('نادي التعاون')
          $('.A9').html('شركة مسك العالمية')
          $('.A10').html('منارة التحدة للتنمية الطبية')
          $('.A11').html('شركة دهوة للكاميرات')
          $('.A12').html('شركة الاتصالية')
          $('.A13').html('الماس الراقية')
          $('.A14').html('شركة الكهرباء')
          $('.A15').html('ناصر الحمدان للرياضة')
          $('.A17').html('شاورما كلاسيك')
          $('.A50').html('وزارة الخارجية')
  
          // Branches
          $('.branches-h').html('فروعنا')
          $('.branches-p').html('لدينا العديد من الفروع فى جميع انحاء المملكة لمساعدتك')
          $('.B1').html('مؤسسة الفياض للتخليص الجمركي')
          $('.B2').html('مكتب الفياض بمطار الملك خالد الدولي بالرياض')
          $('.B3').html('مكتب الفياض بالميناء الجاف بالرياض')
          $('.B4').html('مكتب الفياض بمطار الامير نايف بن عبدالعزيز بالقصيم')
          $('.B5').html('مكتب الفياض بمطار الدمام و ميناء الملك عبدالعزيز بالدمام')
          $('.B6').html('مكتب الفياض بمطار جدة و ميناء جدة الاسلامي')
          $('.B7').html('منفذ البطحاء البري')
  
          // Footer 
          $('.footer-txt').html('جميع الحقوق محفوظة &copy; الفياض للتخليص الجمركى');
        } else {
          // localStorage.setItem("lang", false);
          // console.log(localStorage.getItem("lang"))
          $('.lang ').html('عربى');
          $('body').css("direction", "ltr");
          $('body').css("text-align", "left");
          $('body').css('font-family', "'Maven', sans-serif")
          $('title').html('Al fayad')

          $('#home').html('Home');
          $('#services').html('Services');
          $('#about').html('About');
          $('#contact').html('Contact');
  
          // Project
          $('.title h1').html('Speed and mastery');
          $('.title p').html('Al Fayad Office for Customs Clearance and Transport');
          $('.title li span').html('Call Us: 0555168570')

        
          // About
          $('.about-h').html('Bandar Fayyad Corporation for customs clearance and transport')
          $('.about-p').html('Al Fayyadh Establishment for Customs Clearance in the name of 2758 with License No. 1970, our launch towards the world of customs clearance and transport began in the year of Bandar Fayyad Al Enezi Corporation for Clearance and Transport and with more work and building a wall of trust between us and helped us increase our launch and the Kingdom increased our activities in all parts of the East to West and from north to south, and the number of our shipments by air, sea and land has increased from Riyadh airport to Dammam with its airports and ports, Jeddah, airport, port, train stations and Riyadh Dry Port from companies and the most experienced in the field of customs clearance and transportation. And we have close working relations with a selection of companies and commercial and industrial institutions in the Kingdom of Saudi Arabia, which we all undertake by 2030 and aim for development. We all reach a vision.')
          $('.about-contact').html('Contact Us')
          
          // Services
          $('.services-lang h1').html('Our Services')
          $('.services-lang p').html('Al Fayad Office for Customs Clearance and Transport');
          $('.services-lang small').html('')
          $('.C1').html('Obtaining Saber certificates and registering with the authority')
          $('.C2').html('Assistance in preparing all the necessary documents for customs clearance')
          $('.C3').html('What distinguishes us is to communicate with the shipper before shipping the goods')
          $('.C4').html('Clearance of incoming and outgoing goods')
          $('.C5').html('Transporting containers and trucks to all parts of the Kingdom')
          $('.C6').html('Dry and cold storage yards')
          $('.C7').html('Registration on Fasah and Saber')
          $('.C8').html('Facilitate all customs transactions')

          // Clients
          $('#clients h1').html('Meet Our Clients')
          $('#clients p').html('Our Success Partners')
          $('.A1').html('Saudi Foreign Ministry')
          $('.A2').html('Elmaraay companey')
          $('.A3').html('The Royal Guard')
          $('.A4').html('Dawayat company')
          $('.A5').html('Hyper Lulu')
          $('.A6').html('Hervey')
          $('.A7').html('mackerel')
          $('.A8').html('Altaawn Club')
          $('.A9').html('mackerel')
          $('.A10').html('Misk International Company')
          $('.A11').html('Manarat Al-Tahda for Medical Development')
          $('.A12').html('Dahwa camera company')
          $('.A13').html('Elatsalya company')
          $('.A14').html('Elmas Elraqya')
          $('.A15').html('Electricity Company')
          $('.A16').html('Nasser Al-Hamdan Sports')
          $('.A17').html('Classic Shawarma')
          $('.A50').html('Ministry of Foreign')
  
           // Branches
           $('.branches-h').html('Our Branches')
           $('.branches-p').html('We have branches everywhere to help you')
           $('.B1').html('Al Fayadh Corporation for Customs Clearance')
           $('.B2').html('Al Fayadh office at King Khalid International Airport in Riyadh')
           $('.B3').html('Al-Fayyad office in the dry port in Riyadh')
           $('.B4').html('Al-Fayyad office at Prince Nayef bin Abdulaziz Airport in Al-Qassim ')
           $('.B5').html('Fayadh office at Dammam Airport and King Abdulaziz Port in Dammam')
           $('.B6').html('Al Fayadh office at Jeddah Airport and Jeddah Islamic Port')
           $('.B7').html('Al Batha wilderness port')
        }
      })
    })(jQuery);
