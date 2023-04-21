(function($) {
    var	$window = $(window), $body = $('body');
    var $ps = $('._aalv._akmq._akm0'), $cs = $('._aak6._aak9'), $cbs = $('._aam1._akej._akmr');

    const screen = {
        small   : 0     ,
        medium  : 400   ,
        large   : 800
    };

    resizeHandler();

    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(resizeHandler, 10); //500
    });

    
    /**
     * Controlador de cambio de tamaño del width de la pantalla.
     */
    function resizeHandler() {
        // Obtener ancho de ventana.
        const iw = $window.width();
        // Determinar el tamaño y el ancho con nombre.
        let size = null;
        let nw = null;
        for ( let s in screen ) {
            if ( iw >= screen[ s ] ) size = s; nw = iw;
        }
        console.log("size=> " + size + ' and ' + 'new => ' + nw);
        // Aplicar la media Query en cada tamaño de la pantalla.
        mediaQuery(nw);
    }

    
    /**
     * ----- [ Cambios en el componente summary ] ---
     * Borrar e insertar el elemento children summary.
     * Despues de borrar el elemento childres, se modifica las 
     * clases del elemento padre.
     * @param {*} nw 
     */
    var $csb;
    var $tempix2lah0s, $tempixl5mz7h, $tempixh8yej3divs, $temp002, $temp006;
    function mediaQuery( nw ) {

        // ----- [ Cambios en el componente summary ] ---
            if ( nw < 1161 ) {
                if( $csb ) {
                    $cs.remove();
                    $ps.removeClass( '_akm0' );
                    $cbs.removeClass( '_akmr' );
                } else {
                    $csb = $cs.detach();
                    $ps.removeClass( '_akm0' );
                    $cbs.removeClass( '_akmr' );
                }
            } else {
                $ps.append($csb);
                $ps.addClass( '_akm0' );
                $cbs.addClass( '_akmr' );
            }

        
        // ----- [ Cambios en el componente feed ] ---
            var par = $('#r293q1');
            var $ix9f619 = $('#ix9f619'); 
            var $ixvb8j5 = $('#ixvb8j5');
            var $ix1cy8zhl = $('#ix1cy8zhl');
            var $ix2lah0s = $('#ix2lah0s');
            var $ixl5mz7h = $('#ixl5mz7h');
            var $ixh8yej3 = $('#ixh8yej3');
            var $ix1cy8zhl = $('#ix1cy8zhl');

            var $ix1n2onr6 = $('#ix1n2onr6');
            var $ix1n2onr6 = $('#ix1n2onr6');

            if ( nw < 768 ) {
                if ( par.hasClass("x1q0g3np") ) {
                    par.addClass('xdt5ytf').removeClass('x1q0g3np');
                    $ix9f619.addClass('xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc').removeClass('xeq5yr9 x1dr59a3  x13vifvy x1n327nk');
                    $ixvb8j5.addClass('xvbhtw8 xh8yej3').removeClass('xvb8j5 x1vjfegm');
                    $ix1cy8zhl.addClass('xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo').removeClass('x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v');

                    // Se borra el elemento del logo y el elemento final del nav.
                    if ( $tempix2lah0s || $tempixl5mz7h ) {
                        $ix2lah0s.remove();    
                        $ixl5mz7h.remove();
                    } else {
                        $tempix2lah0s = $ix2lah0s.detach();
                        $tempixl5mz7h = $ixl5mz7h.detach();
                    }
                    /**
                     * Mover bloque de div.
                     * guardando como copia lo que se borra para despues recuperarlo.
                     */
                    
                    if( $temp002 || $temp006 ) {
                        $('#ixh8yej3 > div#002').remove();
                        $temp002 = $('#ixh8yej3 > div#002').detach();
                        $temp006 = $('#ixh8yej3 > div#006').detach();
                        $tempixh8yej3divs = $('#ixh8yej3 > div').detach().appendTo($ix1cy8zhl);
                        $tempixh8yej3 = $ixh8yej3.detach();
                    } else {
                        $temp002 = $('#ixh8yej3 > div#002').detach();
                        $temp006 = $('#ixh8yej3 > div#006').detach();
                        $tempixh8yej3divs = $('#ixh8yej3 > div').detach().appendTo($ix1cy8zhl);
                        $tempixh8yej3 = $ixh8yej3.detach();
                    }
                } 
            } else {
                if ( par.hasClass("xdt5ytf") ) {
                    par.addClass('x1q0g3np').removeClass('xdt5ytf');
                    $ix9f619.addClass('xeq5yr9 x1dr59a3 x13vifvy x1n327nk xaw8158 xtuw4uo').removeClass('xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc');
                    $ixvb8j5.addClass('xvb8j5 x1vjfegm').removeClass('xvbhtw8 xh8yej3'); 
                    $ix1cy8zhl.addClass('x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v').removeClass('xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo');

                    /***
                     * Se buelve a agregar los elementos del logo y el elemento final del nav.
                     * Es como la función .append() solo que añade el HTML directamente 
                     * después de la apertura de la etiqueta del elemento seleccionado.
                    ***/
                    $ix1cy8zhl.prepend($tempix2lah0s);
                    $ix1cy8zhl.append($tempixl5mz7h);
                    
                    /***
                     * Pone el elemento tempix1cy8zhl antes del elemento ixl5mz7h
                     ***/
                    var divs = $tempixh8yej3.append($tempixh8yej3divs, $temp002, $temp006);
                    var tempix1cy8zhl = divs.appendTo($ix1cy8zhl);
                    $('#ixl5mz7h').before($(tempix1cy8zhl));
                    $('#ixh8yej3 > div#003').before($($temp002));
                    $('#ixh8yej3 > div#007').before($($temp006));
                    // alfarve - fatima
                } 
            }
    }
})(jQuery);