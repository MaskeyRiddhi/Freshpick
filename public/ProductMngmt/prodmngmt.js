document.addEventListener('DOMContentLoaded', function () {
    // Fetch product data
    fetch('/api/getproducts') // Update the endpoint based on your server route
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Populate the product table
        const productTableBody = document.getElementById('productTableBody');
        data.forEach(product => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${product.productName}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
          `;
          productTableBody.appendChild(row);
        });

          // Update total number of products
          const totalProductsCount = data.length;
          const totalProductsElement = document.getElementById('totalProductsCount');
          totalProductsElement.textContent = totalProductsCount;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  