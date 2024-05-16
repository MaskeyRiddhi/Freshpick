document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const productSection = document.querySelector('.product');
    const sectionsToHide = document.querySelectorAll('.hero, .service, .offers, .top-product, .testimonials, .enquiry');
    const footer = document.querySelector('footer');
    let noMatchMessage = document.createElement('div');
    noMatchMessage.classList.add('no-match-message');
    noMatchMessage.innerText = 'No matching products found.';

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === '') {
            clearProducts();
            removeNoMatchMessage(); // Remove the error message if the input is empty
            showSections();
        } else {
            fetchAndFilterProducts(searchTerm);
        }
    });
    
    function fetchAndFilterProducts(searchTerm) {
        fetch('/api/getproducts') // Fetch products from the server
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Filter products based on the search term
                const filteredProducts = data.filter(product => product.productName.toLowerCase().includes(searchTerm));

                if (filteredProducts.length > 0) {
                    // Display matched products
                    showProducts(filteredProducts);
                    hideSections();
                    removeNoMatchMessage();
                } else {
                    clearProducts();
                    showNoMatchMessage();
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function showProducts(products) {
        productSection.innerHTML = ''; // Clear existing products
        products.forEach(product => {
            const productCard = createProductCard(product);
            productSection.appendChild(productCard);
        });
    }

    function clearProducts() {
        productSection.innerHTML = ''; // Clear existing products
    }

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.classList.add('searched-product'); // Add a class for styling the searched product

    // Construct the card HTML using the product data
    card.innerHTML = `
        <div class="product-details">
            <div class="rating-wrapper">
                ${getStarIcons()} <!-- You can modify this function to display star icons based on product rating -->
            </div>
            <h3 class="h4 card-title">${product.productName}</h3>
            <div class="price-wrapper">
                <data class="price" value="${product.price}">Rs ${product.price}</data>
                <div class="btn-wrapper">
                    <button class="product-btn" aria-label="Add to Wishlist" onclick="addToWishlist('${product._id}')">
                        <ion-icon name="heart-outline"></ion-icon>
                        <div class="tooltip">Add to Wishlist</div>
                    </button>
                    <button class="product-btn" aria-label="Add to Cart" onclick="addToCart('${product._id}')">
                        <ion-icon name="basket-outline"></ion-icon>
                        <div class="tooltip">Add to Cart</div>
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}
    function addToWishlist(productId) {
        // Implement functionality to add product to wishlist
        console.log('Added to wishlist:', productId);
    }

    function addToCart(productId) {
        // Implement functionality to add product to cart
        console.log('Added to cart:', productId);
    }

    function getStarIcons() {
        // Implement logic to generate star icons based on product rating
        return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
        `;
    }

    function hideSections() {
        sectionsToHide.forEach(function (section) {
            section.style.display = 'none';
        });
        footer.style.display = 'none'; // Hide the footer
    }

    function showSections() {
        sectionsToHide.forEach(function (section) {
            section.style.display = '';
        });
        footer.style.display = ''; // Show the footer
    }

    function showNoMatchMessage() {
        removeNoMatchMessage();
        searchInput.parentNode.insertBefore(noMatchMessage, searchInput.nextSibling);
    }

    function removeNoMatchMessage() {
        if (noMatchMessage.parentNode) {
            noMatchMessage.parentNode.removeChild(noMatchMessage);
        }
    }
});
