
  
 (function($){
    "use strict";
  
  /*************************
        Predefined Variables
  *************************/ 
      var POTENZA = {},
          $window = $(window),
          $document = $(document),
          $body = $('body'),
          $progressBar = $('.progress-bar'),
          $countdownTimer = $('.countdown'),
          $counter = $('.counter');
  
     //Check if function exists
       $.fn.exists = function () {
          return this.length > 0;
      };
  
   /*************************
          Preloader
  *************************/  
    POTENZA.preloader = function () {
         $("#load").fadeOut();
         $('#loading').delay(0).fadeOut('slow');
     };
  
  
  /*************************
       Back to top
  *************************/
   POTENZA.goToTop = function () {
    var $goToTop = $('#back-to-top');
        $goToTop.hide();
        $window.scroll(function(){
          if ($window.scrollTop()>100) $goToTop.fadeIn();
          else $goToTop.fadeOut();
        });
      $goToTop.on("click", function () {
        $('body,html').animate({scrollTop:0},1000);
        return false;
      });
    }
  
  /*************************
        Search 
  *************************/
   POTENZA.searchbar = function () {
          var $searchbar = $('.overlay-search');
          if ($searchbar.exists()) {        
          $('.search-btn,.search-close').on("click", function () {
            $searchbar.toggleClass("open")
             return false;
          });    
          }
        }
  
  //Window load functions
    window.onload = function () {
          POTENZA.goToTop(),
          POTENZA.preloader();
      }
  
    //Document ready functions
      $document.ready(function () {
          POTENZA.searchbar();
       });
  })(jQuery);

  // owl carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
})