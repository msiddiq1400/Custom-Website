// Cart
$(document).on('click', '.js-show-cart', function () {
    $('.js-panel-cart').addClass('show-header-cart');
});
$(document).on('click', '.js-hide-cart', function () {
    $('.js-panel-cart').removeClass('show-header-cart');
});

// Side bar
$(document).on('click', '.js-show-sidebar', function() {
    $('.js-sidebar').addClass('show-sidebar');
});
$(document).on('click', '.js-hide-sidebar', function() {
    $('.js-sidebar').removeClass('show-sidebar');
});

// Mobile Menu
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

// Function to populate and show the modal with product data
function showModal(product) {
    // Update image
    $('.wrap-modal1 .wrap-pic-w img').attr('src', product.product_image);
    $('.wrap-modal1 .wrap-pic-w a').attr('href', product.product_image);
    $('.wrap-modal1 .first-thumb').attr('data-thumb', product.product_image);

    console.log(product)
    // Update name, price and desc
    $('.wrap-modal1 .js-name-detail').text(product.product_name);
    $('.wrap-modal1 .mtext-106').text(product.product_price);
    $('.wrap-modal1 .stext-102').text(product.product_desc || 'No description available.');

    // Update sizes
    const sizeOptions = product.product_size
        ? product.product_size.map(size => `<option>Size ${size}</option>`).join('')
        : '<option>Not available</option>';
    $('.wrap-modal1 select[name="size"]').html(sizeOptions);

    // Update colors
    const colorOptions = product.product_color
        ? product.product_color.map(color => `<option>${color}</option>`).join('')
        : '<option>Not available</option>';
    $('.wrap-modal1 select[name="time"]').html(colorOptions);

    // Show the modal
    $('.wrap-modal1').addClass('show-modal1');

    const $slickGallery = $('.slick3');
    const productImages = product?.product_images || []
    productImages.unshift(product.product_image);

    // Clear existing images
    $slickGallery.slick('slickRemove', null, null, true);

    // Add new images
    productImages?.forEach(image => {

        const newImage = `
            <div class="item-slick3" data-thumb="${image}">
                <div class="wrap-pic-w pos-relative">
                    <img src="${image}" alt="IMG-PRODUCT">
                    <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${image}">
                        <i class="fa fa-expand"></i>
                    </a>
                </div>
            </div>
        `;
        $slickGallery.slick('slickAdd', newImage);
    });

    // Reinitialize or update current image
    $slickGallery.slick('slickGoTo', 0);
}

// Event listener for "Quick View" button clicks
$(document).on('click', '.js-show-modal1', function(event) {
    event.preventDefault();
    // Get the index of the clicked product from a data attribute
    const productIndex = $(this).data('index');
    const product = products[productIndex];

    // Call function to show modal with product data
    showModal(product);
});

// Hide modal on close button click
$('.js-hide-modal1').on('click', function() {
    $('.wrap-modal1').removeClass('show-modal1');
});