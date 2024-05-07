document.getElementById('addProduct').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);

  fetch('/api/add_product', { // Ensure this matches the endpoint defined in your routes
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      alert('Product added successfully');
      window.location.href = '/product.html'; // Redirect or handle next steps
  })
  .catch(error => {
      console.error('Error adding product:', error);
      alert('Error adding product');
  });
});
