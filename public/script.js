document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    try {
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);

        const response = await fetch('/api/products/add', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            // Redirect or do something else upon success
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error adding product:', error);
        alert('Failed to add product');
    }
});
