document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    // Here you would typically send the formData to the server using fetch or XMLHttpRequest
    fetch('', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => alert('Product added successfully'))
    .catch(error => alert('Error adding product'));
  });
  