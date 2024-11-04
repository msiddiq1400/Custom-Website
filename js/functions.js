function loadProducts() {
    $.getJSON('data/products.json', function(products) {
        const productContainer = $('#products-container');
        products.forEach(product => {
            productContainer.append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `);
        });
        $('.add-to-cart').click(addToCart);
    });
}

function addToCart() {
    const productId = $(this).data('id');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity++;
    } else {
        cart.push({id: productId, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Fetch product details from JSON and display cart items with quantities
}

function modifyIcons() {
    console.log('called');
    // desktop-menu-icon
    const menuIcon = document.getElementById("menu-icon");
    const cartIcon = document.getElementById("menu-cart");
    
    if (menuIcon) {
        menuIcon.style.color = "black";
    }

    // Change color to purple on hover
    menuIcon.addEventListener("mouseenter", () => {
        menuIcon.style.color = "#717FE0";
    });

    // Revert color to black when not hovering
    menuIcon.addEventListener("mouseleave", () => {
        menuIcon.style.color = "black";
    });

    if (cartIcon) {
        cartIcon.style.color = "black";
    }

    // Change color to purple on hover
    cartIcon.addEventListener("mouseenter", () => {
        cartIcon.style.color = "#717FE0";
    });

    // Revert color to black when not hovering
    cartIcon.addEventListener("mouseleave", () => {
        cartIcon.style.color = "black";
    });
}