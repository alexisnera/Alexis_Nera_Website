// Hamburger menu function
function toggleMenu(a) {

	a.preventDefault();
	
	if (jQuery(this).hasClass('active')) {

		jQuery(this).removeClass('active');
		jQuery('.mobileMenu').slideUp();
		console.log('slide up');

	} else {

		jQuery(this).addClass('active');
		jQuery('.mobileMenu').slideDown();
		jQuery(this).hasClass('active');
		console.log('slide down');
	}
}

jQuery(document).ready(function(){

	// Prevent right click on images in entire website
	jQuery('img').bind('contextmenu', function(e) {
		return false;
	});

	// Prevent dragging of all images in entire website
	jQuery('img').on('dragstart', function(event) { event.preventDefault(); });


	// SLICK - HERO image carousel - autoplay
	jQuery('.heroCarousel').slick({
		fade: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 8000,
		adaptiveHeight: true,
		cssEase: 'linear',
		appendArrows: '',
	});

	// Hamburger Menu
	jQuery('.mobileMenu').hide();
	jQuery('#menuTrigger').click(toggleMenu);

})




