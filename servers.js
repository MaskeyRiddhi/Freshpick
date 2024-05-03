const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path'); // Add this line to import the path module
const farmerRoutes = require('./PostRoutes/farmerRoutes.js')
const CustomerRoutes = require('./PostRoutes/CustomerRoutes.js')
const F_login_routes  = require('./LoginRoutes/F_login_routes.js');
const C_login_routes  = require('./LoginRoutes/C_login_routes.js');
const A_login_routes = require('./LoginRoutes/A_login_routes.js');

//For Get Operartions
const customer_name = require("./GetRoutes/GetCustomerName.js");
const Farmer_name = require('./GetRoutes/GetFarmer');


//For delete operations
const detele_customer = require('./DeleteRoutes/deleteCustomer.js');
const detele_farmer = require('./DeleteRoutes/deletefarmer.js');


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

//post methods
app.use('/api', farmerRoutes);
app.use('/api', CustomerRoutes);
app.use('/api', F_login_routes);
app.use('/api', C_login_routes);
app.use('/api', A_login_routes);


//For Get Operartions
app.use('/api',customer_name);
app.use('/api',Farmer_name);



//For Delete Operation
app.use('/api',detele_customer);
app.use('/api',detele_farmer);



// Start the server
const PORT = 47047;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
