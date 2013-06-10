function flexOrder(flexBreakPoint, flexItem) {

    /*
    / flexBreakPoint = integer - point at which flexTarget element moves back into original flow
    / flexItem = dom element - item to move
    */

    var winW = $(window).width();
    var flexTarget = $(flexItem).parent();

    if( $(".flex-order").length ) {
        if( winW < flexBreakPoint && !$("body").hasClass("flexed") ) {
            $(flexItem).prependTo(flexTarget);
            $("body").addClass("flexed");
        } else if( winW >= flexBreakPoint && $("body").hasClass("flexed") ) {
            $(flexItem).appendTo(flexTarget);
            $("body").removeClass("flexed");
        }
    }
}