$(document).ready(function() {
    $('.js-show-sidebar').on('click', function() {
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click', function() {
        $('.js-sidebar').removeClass('show-sidebar');
    });
});