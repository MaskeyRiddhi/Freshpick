
const express = require('express');
const router = express.Router();
const createProduct = require('../PostController/product.js'); // Adjust the path as per your project structure

router.post('/Products', createProduct); // Use createProduct as the route handler

module.exports = router;

// In your productRoutes.js or wherever your routes are defined
router.get('/products/search', async (req, res) => {
    const searchTerm = req.query.term;
    try {
        const products = await Product.find({ productName: { $regex: new RegExp(searchTerm, 'i') } });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
