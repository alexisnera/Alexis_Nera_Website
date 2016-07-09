
var axl = $('.portfolioEntries').isotope({
  itemSelector: '.portfolioEntry',
  layoutMode: 'fitRows'
});

var senseSpeed = 20;
var scrollLevel = 0;

jQuery(document).ready(function(){

	// Hero image carousel
	jQuery('.heroCarousel').slick({
		fade: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3500,
		adaptiveHeight: true,
		cssEase: 'linear',
		appendArrows: '',
	});

	// Initial nav hide and main nav show upon scrolling
	jQuery(window).scroll(function(event){
	   var scroller = jQuery(this).scrollTop();
	   if (scroller-senseSpeed > scrollLevel){
	      jQuery("#initialNav").slideUp();
	      jQuery("#mainNav").removeClass('hide');
	   } else if (scroller+senseSpeed < scrollLevel) {
	      jQuery("#initialNav").slideDown();
	      jQuery("#mainNav").addClass('hide');
	   }
	   scrollLevel = scroller;
	});



	// Portoflio isotope entries
	// filter .advertising items
	jQuery('.subNavItemAdvertising').click(function(){
		axl.isotope({ filter: '.advertising' });
	})
	// filter .branding items
	jQuery('.subNavItemBranding').click(function(){
		axl.isotope({ filter: '.branding' });
	})
	// filter .packaging items
	jQuery('.subNavItemPackaging').click(function(){
		axl.isotope({ filter: '.packaging' });
	})
	// filter .packaging items
	jQuery('.subNavItemPublication').click(function(){
		axl.isotope({ filter: '.publication' });
	})
	// filter .digital items
	jQuery('.subNavItemDigital').click(function(){
		axl.isotope({ filter: '.digital' });
	})
	// filter .web items
	jQuery('.subNavItemWeb').click(function(){
		axl.isotope({ filter: '.web' });
	})
	// filter .ooh items
	jQuery('.subNavItemOoh').click(function(){
		axl.isotope({ filter: '.ooh' });
	})
	// show all items
	jQuery('.subNavItemAll').click(function(){
		axl.isotope({ filter: '*' });
	})

	// change is-checked class on buttons
	jQuery('.button-group').each(function(){
		jQuery('.button').click(function(){
			jQuery('.button-group').find('.is-checked').removeClass('is-checked');
			jQuery( this ).addClass('is-checked');
		})
	});

})


