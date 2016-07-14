// ISOTOPE JS
jQuery(document).ready(function(){
	// Filter by category

// layout Isotope after each image loads
var $grid = $('.portfolioEntries').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
  });
});

	$("#subNavItemAll").click(function(){
		$(".portfolioEntries").isotope({ filter: '*' })
		console.log("Show All");
	});

	$("#subNavItemAdvertising").click(function(){
		$(".portfolioEntries").isotope({ filter: '.advertising' })
		console.log("Advertising");
	});

	$("#subNavItemBranding").click(function(){
		$(".portfolioEntries").isotope({ filter: '.branding' })
		console.log("Branding");
	});

	$("#subNavItemPackaging").click(function(){
		$(".portfolioEntries").isotope({ filter: '.packaging' })
		console.log("Packaging");
	});

	$("#subNavItemPublication").click(function(){
		$(".portfolioEntries").isotope({ filter: '.publication' })
		console.log("Publication");
	});

	$("#subNavItemDigital").click(function(){
		$(".portfolioEntries").isotope({ filter: '.digital' })
		console.log("Digital");
	});

	$("#subNavItemWeb").click(function(){
		$(".portfolioEntries").isotope({ filter: '.web' })
		console.log("Web");
	});

	$("#subNavItemOoh").click(function(){
		$(".portfolioEntries").isotope({ filter: '.ooh' })
		console.log("OOH");
	});

	// change 'is-checked' class on buttons
	jQuery('.button-group').each(function(){
		jQuery('.button').click(function(){
			jQuery('.button-group').find('.is-checked').removeClass('is-checked');
			jQuery( this ).addClass('is-checked');
		})
	});

})
