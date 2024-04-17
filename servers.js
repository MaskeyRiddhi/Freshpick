const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/AuthRoutes');
const path = require('path'); // Add this line to import the path module
const farmerRoutes = require('./routes/farmerRoutes.js')
const CustomerRoutes = require('./routes/CustomerRoutes.js')
const F_login_routes  = require('./routes/F_login_routes.js');
const C_login_routes  = require('./routes/C_login_routes.js');
const A_login_routes = require('./routes/A_login_routes.js');


dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

const app = express();

// Middleware for parsing JSON body
app.use(express.json());
app.use(express.static('public'))



// Routes for authentication
app.use('/api/auth', authRoutes);
app.use('/api', farmerRoutes);
app.use('/api', CustomerRoutes);
app.use('/api', F_login_routes);
app.use('/api', C_login_routes);
app.use('/api', A_login_routes);

// Start the server
const PORT = 47047;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
