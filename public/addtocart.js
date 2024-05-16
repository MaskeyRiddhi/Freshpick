document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.btn.btn-primary');
  const cartPanel = document.querySelector('[data-side-panel="cart"]');
  const cartHeader = document.querySelector('.header-action-btn[data-panel-btn="cart"]');
  const cartBadge = cartHeader.querySelector('.btn-badge');
  const scrollBtn = document.querySelector('.scroll-btn');

  // Load cart items from local storage on page load
  loadCart();

  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const productCard = button.closest('.product-card');
          const productTitle = productCard.querySelector('.card-title a').innerText;
          const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('Rs ', ''));

          // Add the item to the cart
          addToCart(productTitle, productPrice);

          // Update the subtotal
          updateSubtotal();

          // Update cart badge count
          updateBadgeCount();
      });
  });

  // Event listener for removing items from the cart
  cartPanel.addEventListener('click', function(event) {
      if (event.target.closest('.item-close-btn')) {
          event.preventDefault();
          const itemToRemove = event.target.closest('.panel-item');
          removeFromCart(itemToRemove);
          updateSubtotal();
          updateBadgeCount();
      }
  });

  function addToCart(title, price) {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push({ title, price });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      renderCart();
  }

  function removeFromCart(itemToRemove) {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const index = Array.from(itemToRemove.parentNode.children).indexOf(itemToRemove);
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      renderCart();
  }

  function updateSubtotal() {
      let subtotalValue = 0;
      cartPanel.querySelectorAll('.item-value').forEach(function(itemValue) {
          subtotalValue += parseFloat(itemValue.innerText.replace('Rs ', ''));
      });

      cartPanel.querySelector('.subtotal-value').innerText = 'Rs ' + subtotalValue.toFixed(2);
  }

  function renderCart() {
      cartPanel.querySelector('.panel-list').innerHTML = '';
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.forEach(function(item) {
          const newItem = document.createElement('li');
          newItem.classList.add('panel-item');
          newItem.innerHTML = `
              <div class="panel-card">
                  <div>
                      <p class="item-title">${item.title}</p>
                      <span class="item-value">Rs ${item.price}</span>
                  </div>
                  <button class="item-close-btn" aria-label="Remove item">
                      <ion-icon name="close-outline"></ion-icon>
                  </button>
              </div>
          `;
          cartPanel.querySelector('.panel-list').appendChild(newItem);
      });
  }

  function loadCart() {
      renderCart();
      updateSubtotal();
      updateBadgeCount();
  }

  function updateBadgeCount() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartBadge.innerText = cartItems.length.toString().padStart(2, '0');
  } 

  // Check the height of the panel list and toggle the scroll button
  function toggleScrollButton() {
      if (cartPanel.querySelector('.panel-list').scrollHeight > 1200) {
          scrollBtn.style.display = 'block';
      } else {
          scrollBtn.style.display = 'none';
      }
  }

  // Call the function initially and on window resize
  toggleScrollButton();
  window.addEventListener('resize', toggleScrollButton);

  // Smooth scroll to the bottom of the panel list when scroll button is clicked
  scrollBtn.addEventListener('click', function() {
      cartPanel.querySelector('.panel-list').scrollTo({
          top: cartPanel.querySelector('.panel-list').scrollHeight,
          behavior: 'smooth'
      });
  });
});
