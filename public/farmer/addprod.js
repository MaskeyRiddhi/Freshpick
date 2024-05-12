document.addEventListener('DOMContentLoaded', async () => {
    const addProductForm = document.getElementById('addProductForm');
    
    // Get the category ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');

    // Automatically populate the category input field with category ID
    document.getElementById('productCategory').value = categoryId;

    addProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        // const image = document.getElementById('image').value;
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
                    
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            window.location.href = './product.html';

            // Optionally, you can redirect or show a success message here
        } catch (error) {
            console.error('Error adding product:', error);
            // Optionally, you can show an error message to the user
        }
    });
});