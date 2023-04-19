(function($) {
    var	$window = $(window), $body = $('body');
    var parent_sumary = $('._aalv._akmq._akm0');
    var children_sumary = $('._aak6._aak9'); 
    var bigPhoneAdd = $('.xx');
    var children_brother = $('._aam1._akej._akmr');


    /**
     * A veces necesitamos ejecutar funciones que pueden tardar en ejecutarse o que pueden consumir bastantes 
     * recursos de la máquina. Para esos casos, por lo general, no queremos ejecutarlos decenas de veces mientras 
     * el usuario aún está redimensionando la ventana para alcanzar el tamaño deseado. Para estos casos particulares 
     * podemos utilizar un truco muy sencillo:
     */


    /**
     * Básicamente lo que hacemos en este caso es agregar un tiempo de espera de 500 milisegundos para llamar a nuestra función doneResizing. 
     * Este contador de 500 milisegundos se reinicia con cada cambio en las dimensiones de la ventana (a medida que borramos el tiempo de espera), 
     * por lo que la función solo se llamará si el usuario deja de cambiar el tamaño de la ventana O si el usuario cambia el tamaño de la ventana MUY 
     * lentamente, lo cual es muy poco probable: )
     */
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing(){
        //whatever we want to do
    }




    // Play initial animations on page load.
		$window.on('load', function() {
            var windowWidth = $( this ).width();
            windowWidth < 1160 ? appendSumary() : datachSumary();

            if ( windowWidth <= 767 ) {
                var par = $('#r293q1');
                if ( par.hasClass("x1q0g3np") ) {
                    par.addClass('xdt5ytf').removeClass('x1q0g3np');
                } 
            }

            if (windowWidth => 768) {
                if ( par.hasClass("xdt5ytf") ) {
                    par.addClass('x1q0g3np').removeClass('xdt5ytf');
                } 
            }
		});
    
    // Resize width
        $window.resize(function(e) {

            //var newParentDiv = 'x9f619 xnz67gz x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1qughib'; // add -----> xdt5ytf
            //var parentDiv = $('x9f619 xnz67gz x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x1qjc9v5 x1oa3qoh x1qughib'); // delete -> x1q0g3np
            var windowWidth = $( this ).width();
            windowWidth < 1160 ? appendSumary() : datachSumary();

            
        });

        function appendSumary() {
            children_sumary.detach();
            bigPhoneAdd.appendTo( parent_sumary );
            parent_sumary.removeClass( '_akm0' );
            children_brother.removeClass( '_akmr' );
        }

        function datachSumary() {
            parent_sumary.addClass( '_akm0' );
            children_brother.addClass( '_akmr' );
            bigPhoneAdd.detach();
            children_sumary.appendTo(parent_sumary);
        }
    
    

    //console.log("DEBUG: Detect widht 767: ");
    //console.log(parentDiv);
    //parentDiv.addClass(newParentDiv);
    //parentDiv.removeClass(parentDiv);
    //parentDiv.addClass(newParentDiv).removeClass(parentDiv);

})(jQuery);