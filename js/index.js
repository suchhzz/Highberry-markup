$(document).ready(function () {
    $('.accordion').click(function () {
        handleAccordionClick($(this));
    });

    $('.berry-list').each(function () {
        const $accordion = $(this);

        $accordion.find('.accordion').first().each(function () {
            console.log($(this));
            handleAccordionClick($(this));
        });
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

    changeBerrySliderImage('berriesFruits');

    $('.info-content').click(function () {
        clearSelectedBerrySlider();
        changeBerrySliderImage($(this).data('image'));

        $(this).addClass('selected');


        let imageIndex = $(this).index();

        $('.image-description-mobile .description-item').eq(imageIndex - 1).addClass('selected');
        $('.mobile-image-title .image-title-item').eq(imageIndex - 1).addClass('selected');
    });

})

function clearAccordionTabs($container, $content, $line) {
    $container.find('.accordion-content').not($content).removeClass('active').css('max-height', '0');
    $container.find('.line').not($line).removeClass('highlight').css({
        'max-height': '0',
        'height': '0',
    });
    $container.find('.ellipse').removeClass('highlight');
}

function handleAccordionClick($accordion) {
    const $berryContainer = $accordion.closest('.berry-list');
    const $targetAccordion = $accordion.closest('.accordion');

    const $content = $targetAccordion.find('.accordion-content');
    const $line = $targetAccordion.find('.line');

    clearAccordionTabs($berryContainer, $content, $line);

    $content.addClass('active');
    $targetAccordion.find('.ellipse').addClass('highlight');
    $line.addClass('highlight').css({
        'max-height': '1000px',
        'height': 'auto',
    });

    const scrollHeight = $content.prop('scrollHeight');
    $content.css('max-height', scrollHeight + 'px');

    $line.css({
        'max-height': scrollHeight + 'px',
        'height': scrollHeight + 'px'
    });

    let berry = $targetAccordion.data('image');
    changeBerryListImage(berry);
}

function clearSelectedBerrySlider() {
    $('.info-content').removeClass('selected');
    $('.image-description-mobile .description-item').removeClass('selected');
    $('.mobile-image-title .image-title-item').removeClass('selected');
}

const images = ['berriesFruits', 'wildBerries', 'puree', 'vegetables', 'mixture'];
const imageClasses = ['first', 'second', 'third', 'fourth', 'fifth'];

function changeBerrySliderImage(currentImageId) {
    const $images = $('.berry-slider .image-item');
    const total = $images.length;

    let startIndex = $images.index($('#' + currentImageId));
    const orderedImages = [...$images].slice(startIndex).concat([...$images].slice(0, startIndex));

    $images.css('z-index', '0');

    const visibleImages = orderedImages.slice(0, 5);

    visibleImages.forEach((img, i) => {
        const heightPercent = 100 - i * 10;
        const zIndex = 5 - i;
        const marginRightPercent = ((4 - i) / 4) * 20;

        $(img).css({
            display: 'inline-block',
            height: heightPercent + '%',
            'z-index': zIndex,
            'margin-right': marginRightPercent + '%'
        });
    });
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