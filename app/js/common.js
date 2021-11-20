$(window).on('load', function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(1000).fadeOut('medium');    
});

$(document).ready(function() {
 
	$(".top").click(function(e) {
		e.preventDefault;
		$("html, body").animate({ scrollTop: 0 } );
		return false;
	});
  $('body').scroll(function(e) {
		e.preventDefault();
 		if ($(this).scrollTop() > 100 ) {
			 //console.log('scrolled');
		//if ($(this).scrollTop() > $(this).height()) {
			//$('.top').css('display', 'block');
			$('.top').addClass('active');
    } else {
			//console.log('notscrolled');
      //$('.top').css('display', 'none');      
      $('.top').removeClass('active');      
		}
  });




const $leftLinks = document.querySelectorAll('.left-menu a'),
$mapLinks = document.querySelectorAll('.interactive-map a'),
$info = document.querySelector('.info');

const requestData = (id = 1) => {
// remove ../app befor live deploy
fetch('../app/img/contacts/data.json')
.then((response) => {
return response.json();
})
.then((data) => {
$info.innerHTML = `
	<h2>${data[id - 1].district}</h2>
	<p>${data[id - 1].info}</p>
`;
});
};

requestData();

$leftLinks.forEach(el => {
el.addEventListener('mouseenter', (e) => {
let self = e.currentTarget;
let selfClass = self.getAttribute('href');
let color = self.dataset.color;
let currentElement = document.querySelector(`.interactive-map a[href="${selfClass}"]`);
//let currentPolygon = currentElement.querySelectorAll('polygon');
let currentPath = currentElement.querySelectorAll('path');
//if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
self.classList.add('active');
});

el.addEventListener('mouseleave', (e) => {
let self = e.currentTarget;
let selfClass = self.getAttribute('href');
let currentElement = document.querySelector(`.interactive-map a[href="${selfClass}"]`);
//let currentPolygon = currentElement.querySelectorAll('polygon');
let currentPath = currentElement.querySelectorAll('path');
//if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
self.classList.remove('active');
});
});

$mapLinks.forEach(el => {
el.addEventListener('mouseenter', (e) => {
let self = e.currentTarget;
let selfClass = self.getAttribute('href');
let color = self.dataset.color;
let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
//let currentPolygon = self.querySelectorAll('polygon');
let currentPath = self.querySelectorAll('path');
//if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
currentElement.classList.add('active');
});

el.addEventListener('mouseleave', (e) => {
let self = e.currentTarget;
let selfClass = self.getAttribute('href');
let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
//let currentPolygon = self.querySelectorAll('polygon');
let currentPath = self.querySelectorAll('path');
//if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
currentElement.classList.remove('active');
});

el.addEventListener('click', (e) => {
e.preventDefault();
let self = e.currentTarget;
let selfClass = self.getAttribute('href');
let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
let id = parseInt(currentElement.dataset.id);
requestData(id);
});
});




  // $(window).scroll(function(e) {
	// 	e.preventDefault();
 	// 	if ($(this).scrollTop() > 100 ) {
	// 	//if ($(this).scrollTop() > $(this).height()) {
	// 		$('.top').addClass('.active');
  //   } else {
  //     $('.top').removeClass('.active');      
	// 	}
  // });


	$(".sf-menu").superfish({
			delay: 200,
			speed: "fast",
			cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu").
	parent().mmenu({
			extensions: [ 'effect-menu-slide', 'theme-white' ],
			navbar: {
					title: '<img src="img/LogoGY_.png">'
			},
			offCanvas: {
					position: 'right'
			}       
	});

	var api = $('#mobile-menu').data('mmenu');
	api.bind('open:finish', function() {
			$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
			$('.hamburger').removeClass('is-active');
	});    

	
	$(".s-venue .wrapper .tab_item").slice(1).hide();
	$(".venue-top .tab").click(function() {
			$(".venue-top .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".s-venue .wrapper .tab_item").hide().eq($(this).index()).fadeIn('500')
	}).eq(0).addClass("active");

	$(".s-gyf-tabs .wrapper .tab_item").slice(1).hide();
	$(".gyf-tabs .tab").click(function(e) {
		e.preventDefault();
			$(".gyf-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
			//$(".tab_content .tab_item").removeClass("active").eq($(this).index()).addClass("active");
			$(".wrapper .tab_item").hide().eq($(this).index()).fadeIn('500')
	}).eq(0).addClass("active");
	




	$(function(){
		var linkname = $('.tl-nav ul li');
		linkname.on('click', function(){
			linkname.removeClass('current').eq($(this).index()).addClass('current');
			//alert($(this)[0].href);
		});
	});







	
	// var linkname = $('.tl-nav ul li a').attr('href');
	// 	linkname.each.click(function() {
	// 	console.log('linkname');
	// });



	
// var mainNavLinks = $('.tl-nav ul li a');
// var mainSections = $('.tl-content section');
// var lastId;
// var cur = [];
// $('body').scroll(function(e) {
// 	e.preventDefault();
// 	var fromTop = $(this).scrollY;
// 	mainNavLinks.each(function() {
// 		var section = $(mainNavLinks.hash);
// 		if (section.offsetTop <= fromTop && 
// 				section.offsetTop + section.offsetHeight > fromTop
// 			) {
// 				mainNavLinks.addClass('current');
// 			} else {
// 				mainNavLinks.removeClass('current');
// 			}
// 	});
// });



		
	$(".s-leaders .wrapper .tab_item").slice(1).hide();
	$(".s-leaders .tab").click(function() {
			$(".s-leaders .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".s-leaders .wrapper .tab_item").hide().eq($(this).index()).fadeIn('500')
	}).eq(0).addClass("active");


	// $(document).scroll(function() {
	// 	var scrollDonate = $(this).scrollTop();
	// 	if (scrollDonate > 150) {
	// 		$('.donate-wrap').addClass('fix-donate');
	// 	} else {
	// 		$('.donate-wrap').removeClass('fix-donate');
	// 	}
	// });
	
	// $('.donate_link').magnificPopup({
	// 		type: "inline",
	// 		midClick: true,
	// 		showCloseBtn: true
	// });
	





	//Замовити квитка Ріо
	$('.booking_link').magnificPopup({
			type: "inline",
			midClick: true,
			showCloseBtn: true
	});
	


	// $(".arrow-bottom").click(function() {
	// 	$("html, body").animate({ scrollTop: $(".main-head").height()+10 }, "slow");
	// 	return false;
	// });


// animations
// new WOW().init();
// wow = new WOW(
// 	{
// 		animateClass: 'animated',
// 		offset:       100
// 	}
// );
// wow.init();

// slider on index page
$('.slider-home').owlCarousel({
	loop:true,
	//margin:10,
	responsiveClass: true,
	stagePadding:0,	
	nav:true,
	items:1,
	//animateOut: 'slideIn',
	//animateIn: 'slideOut',
	dots:false,
	singleItem:true,
  navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
  responsive:{
   0:{
    items:1
   },
   600:{
    items:1
   },
   1000:{
		items:1,
   }
  }

});



// slider on index page
// function heightses() {
// 	$(".slider-index .slide").height('auto').equalHeights();
// }
// var sliderindex = $('.slider-index');
// sliderindex.owlCarousel({
// 	loop: true,
// 	responsiveClass: true,
//   animateOut: 'fadeOut',
// 	items: 1,
// 	dots: false,
// 	autoHeightClass: true,
//   nav: true,
//   navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
//     responsive:{
//         0:{
//             items:1,
//             dots: false,
//             autoHeight: true,
//         },
//         520:{
//             items:1,
//             dots: false,
//             autoHeight: true,
//         },
//         560:{
//             items:1,
//             dots: false,
//             autoHeight: true,
//         },
//         768:{
//             items:1,
//             dots: false,
//         },
//         992:{
//             items:1,
//             dots: true,
//         },
//         1200:{
//           dots: true,
//           items:1,
//         }
//     }

// });




// sect. carousel globalyouthfest
$('.gyf-carousel').owlCarousel({
	loop:true,
	nav:true,
	margin:30,
  autoWidth:true,
  dots:false,
  navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
  responsive:{
   0:{
    items:1
   },
   600:{
    items:2
   },
   1000:{
		items:2
   }
  }

});


// carousel world calture dance festival 2018
$('.index-carousel ').owlCarousel({
	responsiveClass: true,
	animateOut: 'fadeOut',
	autoplay: 1600,
	singleItem: true,
	smartSpeed: 900,
	navSpeed: 1500,
	autoHeightClass: true,
	items: 1,
	animateOut: 'fadeOut',
	loop: true,
	//autoHeightClass: true,
	dots: true,
	nav:true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	stopOnHover: true,
	pagination: true,
	// beforeMove: function(){
	//     $('.slide-title').removeClass('animated fadeInDown');

	//   },
	// afterMove: function(){
	//     $('.slide-title').addClass('animated fadeInDown');
	//   }        
});




// Carousel japan day program
  $('.carousel-japprogram').on('initialized.owl.carousel', function() {
    setTimeout(function() {
     carouselJapprogram() 
    },100);
  });
  $('.carousel-japprogram').owlCarousel({
    loop:true, 
    nav:true,
    smartSpeed:700,
    navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    dots:false,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1100: {
            items: 3
        }
    }
  });

   function carouselJapprogram() {
    $('.carousel-japprogram-item').each(function() {
        var ths = $(this),
            thsh = ths.find('.carousel-japprogram-content').outerHeight();
            ths.find('.carousel-japprogram-image').css('min-height', thsh);
    });
  }carouselJapprogram();

  // resize window
  function onResize() {
    $('.carousel-japprogram-content').equalHeights();    
      }onResize();
      window.onresize = function() {
        onResize()
    };




//rio montana carousel
  $('.carousel-rioprogram').on('initialized.owl.carousel', function() {
    setTimeout(function() {
     carouselRioprogram() 
    },100);
  });
  $('.carousel-rioprogram').owlCarousel({
    loop:true, 
    nav:true,
    smartSpeed:700,
    navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    dots:false,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1100: {
            items: 3
        }
    }
  });
   function carouselRioprogram() {
    $('.carousel-rioprogram-item').each(function() {
        var ths_rio = $(this),
            thsh_rio = ths_rio.find('.carousel-rioprogram-content').outerHeight();
            ths_rio.find('.carousel-rioprogram-image').css('min-height', thsh_rio);
    });
  }carouselRioprogram();

  // resize window
  function onResizeRio() {
    $('.carousel-rioprogram-content').equalHeights();    
      }onResizeRio();
      window.onresize = function() {
        onResize()
    };

// end of rio montana carousel


// slider on koreancamp page
$(".slider-korecamp2018").owlCarousel({
  loop: true,
  animateOut: 'fadeOut',
  items: 1,
  nav: true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        520:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        560:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        768:{
            items:1,
            dots: false,
        },
        992:{
            items:1,
            dots: true,
        },
        1200:{
          dots: true,
          items:1,
        }
    }

});


// carousel partners
	$(".carousel-brands").owlCarousel({
		loop:true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:2,
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
	});

	function heightses() {
		$(".carousel-team .carousel-item").height('auto').equalHeights();
	}



// Carousel team (korean.html)
var korcarousel = $('.carousel-team');
korcarousel.owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 3,
    //dots:true,
    responsive:{
        0:{
            items: 1,
        },
        480:{
            items: 2,
        },
        768:{
            items: 2,
        },
        992:{
            items: 3,
        }
    }
});



		 
// gnc countdown
// $('.my-countdown').countdown({ 
// 	until: new Date(2017, 4, 13, 10, 30 ),
// 	labels: ['Років', 'Місяців', 'Тижнів', 'Днів', 'Годин', 'Хвилин', 'Секунд']
// }); 


// $('.japday-countdown').countdown({ 
// 	until: new Date(2017, 4, 27, 09, 0 ),
// 	labels: ['Років', 'Місяців', 'Тижнів', 'Днів', 'Годин', 'Хвилин', 'Секунд']
// }); 

// $('.englishcamp-countdown').countdown({ 
// 	until: new Date(2018, 00, 02, 09, 0 ),
// 	labels: ['Років', 'Місяців', 'Тижнів', 'Днів', 'Годин', 'Хвилин', 'Секунд']
// }); 

// $('.gnc-countdown').countdown({ 
// 	until: new Date(2017, 9, 25, 09, 0 ),
// 	labels: ['Років', 'Місяців', 'Тижнів', 'Днів', 'Годин', 'Хвилин', 'Секунд']
// });

// accordeon
$(".accordeon dd").hide().prev().click(function() {
	$(".accordeon dd").not(this).slideUp();
	$(this).toggleClass('open').next().not(":visible").slideDown();

});

// isotop masonry
// var $gyfgallery = $('.gyf-gallery-container').isotope({
//   itemSelector: '.photo-gyf',
// 	layoutMode: 'masonry',
// });

// $gyfgallery.imagesLoaded().progress( function() {
// 	$gyfgallery.isotope('layout');
// });

$('.gyf-gallery-container').colcade({
  columns: '.grid-col',
  items: '.grid-item'
})

$('.photo-gyf').magnificPopup(
	{
  type : 'image',
  gallery : {
		enabled: true
  },
  removalDelay : 300,
	mainClass : 'mfp-fade'
}).click(function(e) {
e.preventDefault();

	$("button.mfp-arrow").delay(1000).fadeIn();
	return false;
});







});

