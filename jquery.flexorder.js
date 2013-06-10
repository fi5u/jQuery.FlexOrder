(function($){

    $.fn.flexorder = function( options ) {

        var settings = {
            flexBreakPoint : 960
        }

        if (options) {
            $.extend( settings, options );
        }

        return this.each(function(i, el) {
            alert(settings.flexBreakPoint);
            var winW = $(window).width();
            var flexTarget = $(el).parent();
            if( winW < settings.flexBreakPoint && !$("body").hasClass("flexorder-flexed") ) {
                $(el).prependTo(flexTarget);
                $("body").addClass("flexorder-flexed");
            } else if( winW >= settings.flexBreakPoint && $("body").hasClass("flexorder-flexed") ) {
                $(el).appendTo(flexTarget);
                $("body").removeClass("flexorder-flexed");
            }
        });
    }
})( jQuery );