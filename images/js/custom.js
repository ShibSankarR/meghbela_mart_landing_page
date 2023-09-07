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


  $("#tab li").click(function () {
  //reset
  $("#tab .submenu").addClass("show-menu");
  $("#tab .activate").removeClass("activate");

  //act
  $(this).addClass("activate")
  var id = $(this).closest("ul").attr("id").replace("submenu", "");
  $("#submenu" + id).addClass("show-menu");
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


  // side Product Slider

  $('.side-slider').owlCarousel({
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

// side Product Slider

$('.left-side-pro').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots: false,
  autoplay: true,
  autoplayHoverPause:true,
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


// side Product Slider

$('.center-product-slider').owlCarousel({
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
          items:2
      },
      1000:{
          items:3
      }
  }
});
//  Product Slider

$('.product-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots: false,
  autoplay: false,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});








 




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

  








 
//cart change address

$(".shipping-calculator-button").click(function(){
  $(".shipping-calculator-form").show("");
});















});






































$("#select-tab > ul > li > a.cable-tv").parent( "li" ).addClass("active"); 

  /* Post-document load */ 
    $(document).ready(function(){ 
      /* Events */ 
        $("#select-tab > ul > li > a").click(function(event){ 
          $(this).parent( "li" ).addClass("active"); 
          $("#select-tab > ul > li > a").not(this).each(function(){ 
            $(this).parent( "li" ).removeClass("active"); 
          }); 
          event.preventDefault(); 
        }); 
    }); 


    $(document).ready(function(){ 
      /* Events */ 
        $("#select-tab > ul > li > a.cable-tv").click(function(event){ 
          $("#cable-tv-pane").css('display','block'); 
          $("#broadband-pane").css('display','none');
          $("#select-tab > ul > li > a").not(".register-form").each(function(){ 
            $("#cable-tv-pane").css('display','block'); 
            $("#broadband-pane").css('display','none');
          }); 
          event.preventDefault(); 
        }); 
        $("#select-tab > ul > li > a.broadband").click(function(event){ 
          $("#cable-tv-pane").css('display','none'); 
          $("#broadband-pane").css('display','block');
          $("#select-tab > ul > li > a").not(".register-form").each(function(){ 
            $("#cable-tv-pane").css('display','none'); 
            $("#broadband-pane").css('display','block');
          }); 
          event.preventDefault(); 
        }); 
    });









    

<!--end-->