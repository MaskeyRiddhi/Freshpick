
document.addEventListener('DOMContentLoaded', async () => {
    const addProductForm = document.getElementById('addProductForm');

    // Get the category ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    
    // Automatically populate the category input field with category ID
    document.getElementById('productCategory').value = categoryId;

    // Fetch farmers from the server
    try {
        console.log('Fetching farmers...');
        const response = await fetch('/api/getfarmer');
        if (!response.ok) {
            throw new Error('Failed to fetch farmers');
        }
        const farmers = await response.json();
        console.log('Farmers fetched:', farmers);  // Log the fetched farmers to verify the data

        const farmerSelect = document.getElementById('farmername');
        if (!farmerSelect) {
            throw new Error('Farmer select element not found');
        }

        // Clear any existing options
        farmerSelect.innerHTML = '';

        // Populate the farmer dropdown
        farmers.forEach(farmer => {
            const option = document.createElement('option');
            // option.value = farmer._id; // Assuming each farmer has a unique _id
            option.textContent = farmer.username; // Assuming farmer has a name property
            farmerSelect.appendChild(option);
        });

        console.log('Farmer dropdown populated:', farmerSelect.innerHTML);  // Log the innerHTML of the dropdown
    } catch (error) {
        console.error('Error fetching farmers:', error);
        // Display an error message to the user
        alert('Failed to load farmers. Please try again later.');
    }

    addProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(addProductForm);
        const productName = formData.get('productName');
        const price = formData.get('price');
        const description = formData.get('description');
        const category = formData.get('productCategory');  // Now correctly gathering the category data
        const farmer = formData.get('farmername');

        // Validate form fields
        if (!productName || !price || !description || !category || !farmer) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/api/Products', {
                method: 'POST',
                body: JSON.stringify({
                    productName,
                    price,
                    description,
                    category,
                    farmer
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            window.location.href = './product.html';  // Redirect or show a success message
        } catch (error) {
            console.error('Error adding product:', error);
            // Show an error message to the user
            alert('Failed to add product. Please try again.');
        }
    });
});
