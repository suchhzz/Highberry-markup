$(document).ready(function () {
    $('.accordion').click(function () {
        clearActiveTabs();

        $(this).find('.accordion-content').addClass('active');
        $(this).find('.ellipse').addClass('highlight');
        $(this).find('.line').addClass('highlight');

        let berry = $(this).data('image');
        console.log(berry);
        changeBerryListImage(berry);
    });

    $('#scrollTriggerButton').click(function () {
        $('html, body').animate({
            scrollTop: $('#colorBackgroundTrigger').offset().top
        }, 1000);
    });

    $('.showreel-button').click(function () {
        $('.showreel').toggleClass('active');
    });

    $('.showreel-overlay').click(function () {
        $('.showreel').toggleClass('active');
    });

    $('.info-content').click(function () {
        clearSelectedBerrySlider();
        changeBerrySliderImage($(this).data('image'));

        $(this).addClass('selected');

        let imageIndex = $(this).index();

        $('.image-description-mobile .description-item').eq(imageIndex - 1).addClass('selected');
        $('.mobile-image-title .image-title-item').eq(imageIndex - 1).addClass('selected');
    });

})

function clearSelectedBerrySlider() {
    $('.info-content').removeClass('selected');
    $('.image-description-mobile .description-item').removeClass('selected');
    $('.mobile-image-title .image-title-item').removeClass('selected');
}

const images = ['berriesFruits', 'wildBerries', 'puree', 'vegetables', 'mixture'];
const imageClasses = ['first', 'second', 'third', 'fourth', 'fifth'];

function changeBerrySliderImage(currentImage) {
    $('.image-item').removeClass('first second third fourth fifth');

    let index = images.indexOf(currentImage);

    for (let i = 0; i < images.length; i++) {
        $('#' + images[(index + i) % images.length]).addClass(imageClasses[i]);
    }
}

function changeBerryListImage(item) {
    const newImage = $('#berryListNewImage');
    const currentImage = $('#berryListSelectedImage');
    const filePath = `images/section/berry-list-info/${item}.png`;

    newImage.attr('src', filePath);
    newImage.css('opacity', '1');

    setTimeout(() => {
        currentImage.attr('src', filePath);
        newImage.css('opacity', '0');
    }, 300);
}

function changeBerryListImageMobile(item) {

}

$(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();

    let darkBackgroundTrigger = $('#darkBackgroundHeaderTrigger').offset().top;
    let colorBackgroundTrigger = $('#colorBackgroundTrigger').offset().top;

    if (scrollPosition > darkBackgroundTrigger && scrollPosition < colorBackgroundTrigger) {
        $('header').addClass('dark-background');
        addHeaderTransparent();
    }
    else if (scrollPosition < darkBackgroundTrigger) {
        $('header').removeClass('dark-background');
        addHeaderTransparent();
    }
    else if (scrollPosition >= colorBackgroundTrigger) {
        $('header').removeClass('dark-background');
        $('header').removeClass('transparent-background');
    }
});

function addHeaderTransparent() {
    if (!$('header').hasClass('transparent-background')) {
        $(`header`).addClass('transparent-background');
    }
}

$(document).click(function (event) {
    clearDescription();
});


function clearActiveTabs() {
    $('.accordion-content').removeClass('active');
    $('.ellipse').removeClass('highlight');
    $('.line').removeClass('highlight');
};

