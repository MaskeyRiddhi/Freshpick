const Customer = require('../models/UserModel'); 

// Controller function to update a customer by ID
const updateCustomer = async (req, res) => {
  const customerId = req.params.customerId;
  const updatedData = req.body;

  try {
    const customer = await Customer.findByIdAndUpdate(customerId, updatedData, { new: true });

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = updateCustomer;
