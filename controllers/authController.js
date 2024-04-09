const bcrypt = require('bcrypt');
const Farmer = require('../models/farmerModel');
const Customer = require('../models/UserModel');

exports.signup = async (req, res) => {
    try {
        const { username, email, password, confirm_password,address, role } = req.body;

        // Logging the role received from the request
        // if (!phone_number) {
        //     return res.status(400).json({ message: 'Phone number is required' });
        // }

        if (!role || !['customer', 'farmer'].includes(role.toLowerCase())) {
            return res.status(400).json({ message: 'Invalid or missing role' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser;
        if (role.toLowerCase() === 'farmer') {
            newUser = new Farmer({ username, email, password: hashedPassword, confirm_password,address, role });
        } else if (role.toLowerCase() === 'customer') {
            newUser = new Customer({ username, email, password: hashedPassword, confirm_password,address, role });
        }
   
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Check if role is provided and valid
        if (!role || !['customer', 'farmer'].includes(role.toLowerCase())) {
            return res.status(400).json({ message: 'Invalid or missing role' });
        }

        let User;
        if (role.toLowerCase() === 'farmer') {
            User = Farmer;
        } else if (role.toLowerCase() === 'customer') {
            User = Customer;
        }

         // Find user by email
         const user = await User.findOne({ email });

         // Check if user exists
         if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

         // Compare passwords
         if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

         // Return successful login response
         res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
//         if (password !== confirm_password) {
//             return res.status(400).json({ message: 'Passwords do not match' });
//         }

//         // Checks if the username or email exists already 
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username or email already exists' });
//         }



//         // Create a new user
//         const newUser = new User({ username, email, phone_number, password: hashedPassword, role });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//         //res.status(201).json(newUser);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Controllers for user login
// exports.login = async (req, res) => {
//     try {
//         // Extract email and password from request body
//         const { email, password } = req.body;

//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Verify the password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message:  'Invalid password' });
//         }

//         // If email and password are correct, send a success message
//         return res.status(200).json({ message: 'User found' });

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
