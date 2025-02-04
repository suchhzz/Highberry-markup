$(document).ready(function () {
    $('.slider-item').click(function () {
        $('.slider-item.selected, .image-item').removeClass('selected');

        let dataImage = $(this).data('image');

        $('.image-section').find('#' + $(this).data('image')).addClass('selected');
        $(this).addClass('selected');
        updateImageDescription(dataImage);
    });

    $('.next-arrow-icon').click(function() {
        let currentImageItem = $('#' + $(this).data('section'));

        let nextImageItem = currentImageItem.next('.image-item');

        if (nextImageItem.length) {
            let nextImageId = nextImageItem.attr('id');
            $('.slider-item.selected, .image-item').removeClass('selected');
            nextImageItem.addClass('selected');
            $(`[data-image="${nextImageId}"]`).addClass('selected');
            updateImageDescription(nextImageId);
        }

    });

    $('.prev-arrow-icon').click(function() {

        let currentImageItem = $('#' + $(this).data('section'));

        let prevImageItem = currentImageItem.prev('.image-item');

        if (prevImageItem.length) {
            let prevImageId = prevImageItem.attr('id');
            $('.slider-item.selected, .image-item').removeClass('selected');
            prevImageItem.addClass('selected');

            $(`[data-image="${prevImageId}"]`).addClass('selected');
            updateImageDescription(prevImageId);
        }

    });
});

function updateImageDescription(imageItem) {
    $('.description-image-item').removeClass('selected');
    $(`[data-item="${imageItem}"]`).addClass('selected');
}
