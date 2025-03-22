$(document).ready(function () {
    $('.product-list-menu-icon').click(function () {
        $('.product-list-menu-icon').toggleClass('active');
        $('.product-list-menu').toggleClass('active');
    });

    $('.product-list-item-arrow-down').click(function () {
        let arrowData = $(this).data('menu');
        console.log(arrowData);
        $('#' + arrowData).toggleClass('active');
    });

    $('.slider-content .arrow-right').click(function () {
        $('.slider').animate({
            scrollLeft: '+=387'
        }, 300);
    });

    $('.slider-content .arrow-left').click(function () {
        $('.slider').animate({
            scrollLeft: '-=387'
        }, 300);
    });
})