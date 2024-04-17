// Dummy data for demonstration
const customers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
    // Add more dummy data as needed
  ];
  
  const recentPurchases = [
    { customerId: 1, product: "Apples" },
    { customerId: 2, product: "Oranges" },
    { customerId: 3, product: "Bananas" },
    // Add more recent purchases as needed
  ];
  
  // Display total number of customers
  document.getElementById('total-customers').textContent = customers.length;
  
  // Display top 5 recent purchases
  const purchaseList = document.getElementById('purchase-list');
  recentPurchases.slice(0, 5).forEach(purchase => {
    const customerName = customers.find(cust => cust.id === purchase.customerId).name;
    const listItem = document.createElement('li');
    listItem.textContent = `${customerName} bought ${purchase.product}`;
    purchaseList.appendChild(listItem);
  });
  