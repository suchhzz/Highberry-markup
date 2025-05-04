$(document).ready(function () {
    $('.product-list-menu-icon').click(function () {
        console.log('menu icon click');
        $('.product-list-menu-icon').toggleClass('active');
        $('.product-list-menu').toggleClass('active');
    });

    $('.product-list-menu').click(function (e) {
        e.stopPropagation();
    });

    $('.product-list-item-arrow-down').click(function (e) {
        e.stopPropagation();
        let arrowData = $(this).data('menu');
        console.log(arrowData);
        $('#' + arrowData).toggleClass('active');
    });

    $('.slider-content .arrow-right').click(function () {
        $('.slider').animate({
            scrollLeft: `+=${$('.slider-content .slider-item').outerWidth(true)}`
        }, 300);
    });

    $('.slider-content .arrow-left').click(function () {
        $('.slider').animate({
            scrollLeft: `-=${$('.slider-content .slider-item').outerWidth(true)}`
        }, 300);
    });

    $('.main-image .arrow-right').click(function () {
        $('.image-slider').animate({
            scrollLeft: `+=${$('.image-slider .slider-item').outerWidth(true)}`
        }, 300);

    });

    $('.main-image .arrow-left').click(function () {
        $('.image-slider').animate({
            scrollLeft: `-=${$('.image-slider .slider-item').outerWidth(true)}`
        }, 300);
    });

})