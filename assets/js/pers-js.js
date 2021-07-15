$(document).ready(function() {

    $('.slick-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 800,
      });
  
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  
  });

  // Slapukai---
  jQuery(document).ready(function() {

    jQuery('#sutinku').on('click',function() {
      jQuery(this).parent().slideUp(500);
    });
  
    jQuery('#rodytiBaneri').on('click', function() {
      jQuery('#slapukai').slideDown(500);
  
      return false;
    });
  
  });

  // Counter + Scroll-to-top
  jQuery('.gotop').on('click', function(e) {

    e.preventDefault();
  
    jQuery('html,body').animate({scrollTop: 0}, 'fast');
  
  });
  
  jQuery(window).on('scroll', function() {
    let virsus          = jQuery(document).scrollTop();
    let puslapioAukstis = jQuery(document).height();
    let langoAukstis    = jQuery(window).height();
    let bendras         = virsus + langoAukstis;
    let counterioVirsus = jQuery('.facts-area-row').position().top;
   
    //console.log(virsus);
    //console.log(puslapioAukstis);
    //console.log(langoAukstis);
    ///console.log(bendras);
  
    if(bendras == puslapioAukstis) {
      //alert('Yra');
  
      jQuery('.gotop').addClass('show');
    } 
  
    if(virsus + langoAukstis < puslapioAukstis - 800) {
      jQuery('.gotop').removeClass('show');
    }
  
    // --- Counter ---
    if(virsus + langoAukstis >= counterioVirsus) {
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 4000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            // alert('finished');
          }
        });  
        
      });
    }
  
  });
