
        document.addEventListener('DOMContentLoaded', async () => {
            const addProductForm = document.getElementById('addProductForm');

            addProductForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                const productName = document.getElementById('productName').value;
                const price = document.getElementById('price').value;
                const description = document.getElementById('description').value;
                const image = document.getElementById('image').value;

                try {
                    const response = await fetch('/api/Products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName,
                            price,
                            description,
                            category,
                            image
                            
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Failed to add product');
                    }
                    window.location.href = './product.html';
                    // const product = await response.json();
                    // console.log('Product added:', product);
                    // Optionally, you can redirect or show a success message here
                } catch (error) {
                    console.error('Error adding product:', error);
                    // Optionally, you can show an error message to the user
                }
            });
        });
   

// document.getElementById('addProduct').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const formData = new FormData(this);

//   fetch('/api/add_product', { // Ensure this matches the endpoint defined in your routes
//       method: 'POST',
//       body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//       alert('Product added successfully');
//       window.location.href = '/product.html'; // Redirect or handle next steps
//   })
//   .catch(error => {
//       console.error('Error adding product:', error);
//       alert('Error adding product');
//   });
// });
