
var scrollLevel = 0;


jQuery(document).ready(function(){


	// Prevent right click on images in entire website
	jQuery('img').bind('contextmenu', function(e) {
    	return false;
	});

	// Prevent dragging of all images in entire website
	jQuery('img').on('dragstart', function(event) { event.preventDefault(); });


	// SLICK - HERO image carousel
	jQuery('.heroCarousel').slick({
		fade: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 10000,
		adaptiveHeight: true,
		cssEase: 'linear',
		appendArrows: '',
	});


	// NAV SWITCH
	jQuery("#mainNav").hasClass('hide');
	// Initial nav hide and main nav show upon scrolling
	jQuery(window).scroll(function(){
	   var scroller = jQuery(this).scrollTop();
	   if (scroller > 300){
	   		jQuery("#initialNav").fadeOut('slow');
	   } else {
	   		jQuery("#initialNav").fadeIn();
	   }
	   scrollLevel = scroller;
	});
	// Main nav to disappear when user scrolls to 100px from the top
	jQuery(window).scroll(function(){
		var scroller = jQuery(this).scrollTop();
	    if (scroller < 300){
	    	jQuery("#mainNav").fadeOut('slow').addClass('hide');
	    } else {
	    	jQuery("#mainNav").fadeIn('slow').removeClass('hide');
	    }
	});


})


