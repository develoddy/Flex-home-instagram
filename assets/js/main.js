(function($) {
    var	$window = $(window), $body = $('body');
    var parent_sumary = $('._aalv._akmq._akm0'), children_sumary = $('._aak6._aak9'); bigPhoneAdd = $('.xx')
    var children_brother = $('._aam1._akej._akmr');

    // Play initial animations on page load.
		$window.on('load', function() {
			if( windowWidth < 1160 ) {
                children_sumary.detach();
                bigPhoneAdd.appendTo(parent_sumary);
                console.log("If...");
                parent_sumary.removeClass('_akm0');
                children_brother.removeClass('_akmr');

            } else {
                console.log("Else...");
                parent_sumary.addClass('_akm0');
                children_brother.addClass('_akmr');
                bigPhoneAdd.detach();
                children_sumary.appendTo(parent_sumary);
            }
		});
    
    // Resize
        $window.resize(function(e) {
            var windowWidth = $(this).width();
            if( windowWidth < 1160 ) {
                children_sumary.detach();
                bigPhoneAdd.appendTo(parent_sumary);
                console.log("If...");
                parent_sumary.removeClass('_akm0');
                children_brother.removeClass('_akmr');

            } else {
                console.log("Else...");
                parent_sumary.addClass('_akm0');
                children_brother.addClass('_akmr');
                bigPhoneAdd.detach();
                children_sumary.appendTo(parent_sumary);
            }
        });
    

})(jQuery);