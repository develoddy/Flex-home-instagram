(function($) {
    var	$window = $(window), $body = $('body');
    var parent_sumary = $('._aalv._akmq._akm0'), children_sumary = $('._aak6._aak9'); bigPhoneAdd = $('.xx')
    var children_brother = $('._aam1._akej._akmr');

    // Play initial animations on page load.
		$window.on('load', function() {
            var windowWidth = $(this).width();
			if( windowWidth < 1160 ) {
                children_sumary.detach();
                bigPhoneAdd.appendTo(parent_sumary);
                parent_sumary.removeClass('_akm0');
                children_brother.removeClass('_akmr');

            } else {
                parent_sumary.addClass('_akm0');
                children_brother.addClass('_akmr');
                bigPhoneAdd.detach();
                children_sumary.appendTo(parent_sumary);
            }
		});
    
    // Resize
        $window.resize(function(e) {
            var windowWidth = $(this).width();

            switch ( windowWidth ) {
                case 1160:
                    myFunction(1160);
                    break;
            
                default:
                    console.log("error..");
                    break;
            }



            
        });

        function myFunction(windowWidth) {
            alert("entro..")
            if( windowWidth < 1160 ) {
                children_sumary.detach();
                bigPhoneAdd.appendTo(parent_sumary);
                parent_sumary.removeClass('_akm0');
                children_brother.removeClass('_akmr');
            } else {
                console.log("Else...");
                parent_sumary.addClass('_akm0');
                children_brother.addClass('_akmr');
                bigPhoneAdd.detach();
                children_sumary.appendTo(parent_sumary);
            }
        }
    
    //
    //var parentDiv = $('x9f619.xnz67gz.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib');
    //console.log("DEBUG: Detect widht 767: ");
    //console.log(parentDiv);

})(jQuery);