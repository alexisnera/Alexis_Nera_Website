function toggleMenu(a) {

	a.preventDefault();
	
	if(jQuery(this).hasClass('active')){
		jQuery(this).removeClass('active');
		jQuery('.mobileMenu').slideUp();	
	} else {
		jQuery(this).addClass('active');
		jQuery('.mobileMenu').slideDown();
	}
}


jQuery(document).ready(function(){

	// Prevent right click on images in entire website
	jQuery('img').bind('contextmenu', function(e) {
    	return false;
	});

	// Prevent dragging of all images in entire website
	jQuery('img').on('dragstart', function(event) { event.preventDefault(); });

 	// fitVids plugin for tv commercial
 	jQuery("#tvc").fitVids();

 	// Hamburger Menu
 	jQuery('.mobileMenu').hide();
 	jQuery('#menuTrigger').click(toggleMenu);

})


