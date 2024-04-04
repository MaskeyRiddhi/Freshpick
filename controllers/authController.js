const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const Farmer = require('../models/farmerModel.js');
const Admin = require('../models/adminModel.js')

// Controller for user registration (signup)

exports.signup = async (req, res) => {
    try {
        // Extracts username, email, password, and phone number from request body
        const { username, email, password, phone_number } = req.body;

        // Checks if the username or email exists already 
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Ensure that phone_number is provided
        if (!phone_number) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword, phone_number });
        await newUser.save();

        // res.status(201).json({ message: 'User registered successfully' });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controllers for user login
exports.login = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message:  'password not matched' });
        }

        // If email and password are correct, send a success message
        return res.status(200).json({ message: 'User found' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// // Import required modules
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require('../models/UserModel');
// const Farmer = require('../models/farmerModel'); // Import Farmer model
// const Admin = require('../models/AdminModel'); // Import Admin model

// // POST route for signup
// router.post('/signup', async (req, res) => {
//     try {
//         // Extract user type from request body
//         const userType = req.body.userType;

//         // Extract common fields (username, email, password) from request body
//         const { username, email, password } = req.body;

//         // Generate a salt and hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create a new user object based on the user type
//         let newUser;
//         switch (userType) {
//             case 'user':
//                 newUser = new User({ username, email, password: hashedPassword });
//                 break;
//             case 'farmer':
//                 newUser = new Farmer({ username, email, password: hashedPassword });
//                 break;
//             case 'admin':
//                 newUser = new Admin({ username, email, password: hashedPassword });
//                 break;
//             default:
//                 return res.status(400).json({ message: 'Invalid user type' });
//         }

//         // Save the new user object to the appropriate collection
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;
