function flexOrder(flexBreakPoint, flexItem) {

    /*
    /  A jQuery plugin that simulates flex-order by taking a last child element and moving it to become the first child
    */

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