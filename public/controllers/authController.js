const bcrypt = require('bcrypt');
const Farmer = require('../models/farmerModel');
const Customer = require('../models/UserModel');
const Admin = require('../models/adminModel');

exports.signup = async (req, res) => {
    try {
        const { username, email, password,confirm_password,address, phone_number, role } = req.body;

        // Logging the role received from the reques
        if (!phone_number) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        if (!role || !['customer', 'farmer'].includes(role.toLowerCase())) {
            return res.status(400).json({ message: 'Invalid or missing role' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser;
        if (role.toLowerCase() === 'farmer') {
            newUser = new Farmer({ username, email, password: hashedPassword,confirm_password,address, phone_number, role });
        } else if (role.toLowerCase() === 'customer') {
            newUser = new Customer({ username, email, password: hashedPassword,confirm_password,address, phone_number, role });
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

        // Compare passwords (Note: This is not recommended for production use)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Return successful login response
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// exports.adminlogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }

//         // Find admin by email
//         const admin = await Admin.findOne({ email });

//         // Check if admin exists
//         if (!admin) {
//             return res.status(404).json({ message: 'Admin not found' });
//         }

//         // Compare passwords (Note: This is not recommended for production use)
//         if (admin.password !== password) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         // Return successful login response
//         res.status(200).json({ message: 'Login successful', admin });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
