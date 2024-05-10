// const express = require('express');
// const router = express.Router();
// // const authController = require('../controllers/authController');
// const createProduct = require('../PostController/Product.js');


// router.post('/product', createProduct);
// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const createProduct = require('../PostController/Product.js');

// router.post('/product', createProduct);

// module.exports = router;
// productRoutes.js

// const express = require('express');
// const router = express.Router();
// const Product = require('../models/productModel'); // Assuming this is your product model

// // Route to fetch product data
// router.get('/api/products', async (req, res) => {
//     try {
//         // Fetch all products from the database
//         const products = await Product.find();

//         // Send the products as a response
//         res.json(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

// Route to add a new product
router.post('/product', async (req, res) => {
    try {
        const { productName, price, description, image, categoryName } = req.body;

        // Find the category document based on the selected category name
        const category = await Category.findOne({ name: categoryName });

        // If category not found, return an error
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }

        // Create a new product document associated with the found category
        const newProduct = new Product({
            productName,
            price,
            description,
            image,
            category: category._id // Assign the category's ObjectId
        });

        // Save the product document
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Failed to add product' });
    }
});

module.exports = router;
