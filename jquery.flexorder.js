(function($){

    $.fn.flexorder = function( options ) {

        var settings = {
            breakpoint : 960
        }

        if (options) {
            $.extend( settings, options );
        }

        return this.each(function(i, el) {
            var winW = $(window).width();
            var flexTarget = $(el).parent();
            if( winW < settings.breakpoint && !$("body").hasClass("flexorder-flexed") ) {
                $(el).prependTo(flexTarget);
                $("body").addClass("flexorder-flexed");
            } else if( winW >= settings.breakpoint && $("body").hasClass("flexorder-flexed") ) {
                $(el).appendTo(flexTarget);
                $("body").removeClass("flexorder-flexed");
            }
        });
    }
})( jQuery );