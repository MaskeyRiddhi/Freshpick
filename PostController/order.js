
const Order = require('../models/OrderModel');

const createOrder = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};

module.exports = createOrder;








