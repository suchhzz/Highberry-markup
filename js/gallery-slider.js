$(document).ready(function() {
    $('.ellipse').click(function () {
        $('.ellipse').removeClass('highlight');
        $(this).addClass('highlight');

        let data = $(this).data('image');

        $('.image-item').removeClass('active');
        $('#' + data).addClass('active'); 
    });
});