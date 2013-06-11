/*
 * jquery.flexorder.js 1.0
 *
 * Copyright 2013, Tommy Fisher http://www.tommyfisher.net
 *
 */

(function($){


    $.fn.flexorder = function( options ) {
        var settings = {
            breakpoint : 960,
            targetContainer : $(this).parent(),
            targetPosition : "start"
        }

        if (options) {
            $.extend( settings, options );
        }

        return this.each(function(i, el) {
            /* remember selector's original order position */
            var originalLocation = {};
            var item = $(el).prev();
            if( $(el).prev().length ) {
                /* not originally first child */
                originalLocation.prev = $(el).prev()[0];
            } else {
                /* originally a first child */
                originalLocation.parent = $(el).parent()[0];
            }

            initiateFlexorder = function() {
                var winW = $(window).width();
                var flexTarget = $(el).parent();
                if( winW < settings.breakpoint && !$("body").hasClass("flexorder-flexed") ) {
                    /* flex the order of the item */

                    if( settings.targetPosition === "start" ) {
                        $(el).prependTo(settings.targetContainer[0]);
                    } else {
                        $(el).appendTo(settings.targetContainer[0]);
                    }
                    $("body").addClass("flexorder-flexed");
                } else if( winW >= settings.breakpoint && $("body").hasClass("flexorder-flexed") ) {
                    /* return the flexed item back into the orignal flow */
                    if( originalLocation.parent ) {
                        /* element was a first child */
                        $(originalLocation.parent).prepend(el);
                    } else {
                        /* element was not a first child */
                        /* add a line break to preserve inline-block spacing */
                        $(originalLocation.prev).after(el).after("\n");
                    }
                    $("body").removeClass("flexorder-flexed");
                }
            }

            initiateFlexorder();

            $(window).resize(function() {
                initiateFlexorder();
            });
        });
    }

})( jQuery );