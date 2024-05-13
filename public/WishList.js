document.addEventListener('DOMContentLoaded', function() {
  const addToWishlistButtons = document.querySelectorAll('.product-btn');
  const wishlistPanel = document.querySelector('[data-side-panel="whishlist"]');
  const wishlistHeader = document.querySelector('.header-action-btn[data-panel-btn="whishlist"]');
  const wishlistBadge = wishlistHeader.querySelector('.btn-badge');

  // Load wishlist items from local storage on page load
  loadWishlist();

  addToWishlistButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const productCard = button.closest('.product-card');
          const productTitle = productCard.querySelector('.card-title a').innerText;
          const productPrice = productCard.querySelector('.price').getAttribute('value');

          // Add the item to the wishlist
          addToWishlist(productTitle, productPrice);

          // Update the subtotal
          updateSubtotal();

          // Update wishlist badge count
          updateBadgeCount();
      });
  });

  // Event listener for removing items from the wishlist
  wishlistPanel.addEventListener('click', function(event) {
      if (event.target.closest('.item-close-btn')) {
          event.preventDefault();
          const itemToRemove = event.target.closest('.panel-item');
          removeFromWishlist(itemToRemove);
          updateSubtotal();
          updateBadgeCount();
      }
  });

  function addToWishlist(title, price) {
      let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlistItems.push({ title, price });
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      renderWishlist();
  }

  function removeFromWishlist(itemToRemove) {
      let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      const index = Array.from(itemToRemove.parentNode.children).indexOf(itemToRemove);
      wishlistItems.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      renderWishlist();
  }

  function updateSubtotal() {
      let subtotalValue = 0;
      wishlistPanel.querySelectorAll('.item-value').forEach(function(itemValue) {
          subtotalValue += parseFloat(itemValue.innerText.replace('Rs ', ''));
      });

      wishlistPanel.querySelector('.subtotal-value').innerText = 'Rs ' + subtotalValue.toFixed(2);
  }

  function renderWishlist() {
      wishlistPanel.querySelector('.panel-list').innerHTML = '';
      const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlistItems.forEach(function(item) {
          const newItem = document.createElement('li');
          newItem.classList.add('panel-item');
          newItem.innerHTML = `
              <a href="./product-details.html" class="panel-card">
                  <div>
                      <p class="item-title">${item.title}</p>
                      <span class="item-value">Rs ${item.price}</span>
                  </div>
                  <button class="item-close-btn" aria-label="Remove item">
                      <ion-icon name="close-outline"></ion-icon>
                  </button>
              </a>
          `;
          wishlistPanel.querySelector('.panel-list').appendChild(newItem);
      });
  }

  function loadWishlist() {
      renderWishlist();
      updateSubtotal();
      updateBadgeCount();
  }

  function updateBadgeCount() {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlistBadge.innerText = wishlistItems.length.toString().padStart(2, '0');
  } 
});
