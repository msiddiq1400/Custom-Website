$(document).ready(function() {
    // Toggle the mobile menu
    $('.btn-show-menu-mobile').on('click', function() {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });
});

$(window).resize(function() {
    // Only apply this logic if the window is 992px or wider
    if ($(window).width() >= 992) {
        // Hide the mobile menu if it's currently displayed
        if ($('.menu-mobile').is(':visible')) {
            $('.menu-mobile').slideUp(0); // Instantly hide without animation
            $('.btn-show-menu-mobile').removeClass('is-active'); // Reset button state
        }

        // Hide any open submenus and reset arrow state
        $('.sub-menu-m').each(function() {
            if ($(this).is(':visible')) {
                $(this).slideUp(0); // Instantly hide without animation
                $(this).prev('.arrow-main-menu').removeClass('turn-arrow-main-menu-m'); // Reset arrow
            }
        });
    }
});
