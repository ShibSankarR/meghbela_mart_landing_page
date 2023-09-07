// JavaScript Document
/* DETAILS
==================================================
	Theme Name: guelphextermination.ca	
	Author: Shib RCPL
	Author URI: 
==================================================
*/
// Header Background Change

$(document).ready(function(){





  $(window).scroll(function () {
    if($(document).scrollTop() > 50){
      $(".header").css('background','#fff');
      $(".header").css('bottom','0');
      //$(".logo").css('width','25%');
      
    }
    else{
      $(".header").css('background','');
      $(".header").css('bottom','0');
      $(".logo").css('width','');
      //$(".navbar-nav").css('margin','10px 0 10px 65%');
    }
  });


  $(".search_btn").click(function(){
    $(".search_form").toggleClass('open_field');
    $(".user-login").toggleClass('reduce_size');
    $(".search_filed").css('visibility','visible');
  });









  $("#catagories").click(function(){
    $(".catagory-menu").show("");
  });
  $(".cross").click(function(){
    $(".catagory-menu").hide("");
  });




  //catagory menu

  // $("#fashion").click(function() {
  //   $("#fashion").children(".submenu").toggleClass("show-menu"),
  //   $("#fashion").addClass("activate");
  //   $("#mobiles").children(".submenu").removeClass("show-menu"),
  //   $("#mobiles").removeClass("activate");
  // });
  // $("#mobiles").click(function() {
  //   $("#mobiles").children(".submenu").toggleClass("show-menu"),
  //   $("#mobiles").addClass("activate");
  //   $("#fashion").children(".submenu").removeClass("show-menu"),
  //   $("#fashion").removeClass("activate");
  // });

  $("#tab li").click(function () {
  //reset
  $("#tab .submenu").addClass("show-menu");
  $("#tab .activate").removeClass("activate");

  //act
  $(this).addClass("activate")
  var id = $(this).closest("ul").attr("id").replace("submenu", "");
  $("#submenu" + id).addClass("show-menu");
  });


  








  //my account page
  !(function($) {
    "use strict";
    var a = {
      accordionOn: ["xs"]
    };
    $.fn.responsiveTabs = function(e) {
      var t = $.extend({}, a, e),
        s = "";
      return (
        $.each(t.accordionOn, function(a, e) {
          s += " accordion-" + e;
        }),
        this.each(function() {
          var a = $(this),
            e = a.find("> li > a"),
            t = $(e.first().attr("href")).parent(".tab-content"),
            i = t.children(".tab-pane");
          a.add(t).wrapAll('<div class="responsive-tabs-container" />');
          var n = a.parent(".responsive-tabs-container");
          n.addClass(s),
            e.each(function(a) {
              var t = $(this),
                s = t.attr("href"),
                i = "",
                n = "",
                r = "";
              t.parent("li").hasClass("active") && (i = " active"),
                0 === a && (n = " first"),
                a === e.length - 1 && (r = " last"),
                t
                  .clone(!1)
                  .addClass("accordion-link" + i + n + r)
                  .insertBefore(s);
            });
          var r = t.children(".accordion-link");
          e.on("click", function(a) {
            a.preventDefault();
            var e = $(this),
              s = e.parent("li"),
              n = s.siblings("li"),
              c = e.attr("href"),
              l = t.children('a[href="' + c + '"]');
            s.hasClass("active") ||
              (s.addClass("active"),
              n.removeClass("active"),
              i.removeClass("active"),
              $(c).addClass("active"),
              r.removeClass("active"),
              l.addClass("active"));
          }),
            r.on("click", function(t) {
              t.preventDefault();
              var s = $(this),
                n = s.attr("href"),
                c = a.find('li > a[href="' + n + '"]').parent("li");
              s.hasClass("active") ||
                (r.removeClass("active"),
                s.addClass("active"),
                i.removeClass("active"),
                $(n).addClass("active"),
                e.parent("li").removeClass("active"),
                c.addClass("active"));
            });
        })
      );
    };
  })(jQuery);
  
  $(".responsive-tabs").responsiveTabs({
    accordionOn: ["xs", "sm"]
  });
  



  // banner Slider


  $('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    slideSpeed : 8000,
    autoplaySpeed : 4000,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });





  // Product Slider


  $('.product-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
 });

  // Tranding Product Slider
 $('#trending-product').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots: false,
  autoplay: false,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
  });

  // Tranding Product Slider
  $('#new-arrival').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots: false,
  autoplay: false,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
  });
  // Product Slider


  $('.left-side-pro').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: false,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })




  <!--toptobottom-->

	// browser window scroll (in pixels) after which the "back to top" link is shown

	var offset = 300,

		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced

		offset_opacity = 1200,

		//duration of the top scrolling animation (in ms)

		scroll_top_duration = 700,

		//grab the "back to top" link

		$back_to_top = $('.cd-top');



	//hide or show the "back to top" link

	$(window).scroll(function(){

		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

		if( $(this).scrollTop() > offset_opacity ) { 

			$back_to_top.addClass('cd-fade-out');

		}

	});



	//smooth scroll to top

	$back_to_top.on('click', function(event){

		event.preventDefault();

		$('body,html').animate({

			scrollTop: 0 ,

		 	}, scroll_top_duration

		);

	});


  // Menu
  //$('.stellarnav').stellarNav({
  //theme: 'light',
  //breakpoint: 960,
  //position: 'right',
  //phoneBtn: '18009997788',
  //locationBtn: 'https://www.google.com/maps'
  //});






	$('.blck-tape a').click(function(){

    $('html, body').animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top

    }, 500);

    return false;

  });










  // product details


  $('.product-details-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
 })
 var bigimage = $("#big");
 var thumbs = $("#thumbs");
 //var totalslides = 10;
 var syncedSecondary = true;

 bigimage
   .owlCarousel({
   items: 3,
   slideSpeed: 2000,
   nav: true,
   margin: 30,
   autoplay: true,
   dots: false,
   loop: true,
   responsiveRefreshRate: 200,
   navText: [
     '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
     '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
   ],
   responsive:{
     0:{
         items:1
     },
     600:{
         items:2
     },
     1000:{
         items:3
     }
 }

 })
   .on("changed.owl.carousel", syncPosition);

 thumbs
   .on("initialized.owl.carousel", function() {
   thumbs
     .find(".owl-item")
     .eq(0)
     .addClass("current");
 })
   .owlCarousel({
   items: 4,
   dots: false,
   nav: false,
   margin: 30,
   navText: [
     '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
     '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
   ],
   smartSpeed: 200,
   slideSpeed: 500,
   slideBy: 4,
   responsiveRefreshRate: 100
 })
   .on("changed.owl.carousel", syncPosition2);

 function syncPosition(el) {
   //if loop is set to false, then you have to uncomment the next line
   //var current = el.item.index;

   //to disable loop, comment this block
   var count = el.item.count - 1;
   var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

   if (current < 0) {
     current = count;
   }
   if (current > count) {
     current = 0;
   }
   //to this
   thumbs
     .find(".owl-item")
     .removeClass("current")
     .eq(current)
     .addClass("current");
   var onscreen = thumbs.find(".owl-item.active").length - 1;
   var start = thumbs
   .find(".owl-item.active")
   .first()
   .index();
   var end = thumbs
   .find(".owl-item.active")
   .last()
   .index();

   if (current > end) {
     thumbs.data("owl.carousel").to(current, 100, true);
   }
   if (current < start) {
     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
   }
 }

 function syncPosition2(el) {
   if (syncedSecondary) {
     var number = el.item.index;
     bigimage.data("owl.carousel").to(number, 100, true);
   }
 }

 thumbs.on("click", ".owl-item", function(e) {
   e.preventDefault();
   var number = $(this).index();
   bigimage.data("owl.carousel").to(number, 300, true);
 });

  








 
















});

<!--end-->