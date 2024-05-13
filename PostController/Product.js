
const Product = require('../models/productModel');

const createProduct = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};

module.exports = createProduct;








