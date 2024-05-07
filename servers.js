const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path'); // Add this line to import the path module
const bodyParser = require('body-parser'); // Import bodyParser for parsing URL-encoded bodies
const farmerRoutes = require('./PostRoutes/farmerRoutes.js')
const CustomerRoutes = require('./PostRoutes/CustomerRoutes.js')
const F_login_routes  = require('./LoginRoutes/F_login_routes.js');
const C_login_routes  = require('./LoginRoutes/C_login_routes.js');
const A_login_routes = require('./LoginRoutes/A_login_routes.js');
const productRoutes = require('./PostRoutes/productRoutes.js'); // Import productRoutes
const categoryRoutes = require('./PostRoutes/categoryRoutes.js'); // Import productRoutes

//For Get Operartions
const customer_name = require("./GetRoutes/GetCustomerName.js");
const Farmer_name = require('./GetRoutes/GetFarmer');
const categoryInfo = require('./GetRoutes/GetCategory');


//For delete operations
const detele_customer = require('./DeleteRoutes/deleteCustomer.js');
const detele_farmer = require('./DeleteRoutes/deletefarmer.js');
const detele_category = require('./DeleteRoutes/deleteCategory.js');


//For update operations
const UpdateCus = require('./UpdateRoutes/UpcCustomer.js')
const Updatefar = require('./UpdateRoutes/upfarmer.js')
const UpdateCat = require('./UpdateRoutes/upCategory.js')


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
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

//post methods
app.use('/api', farmerRoutes);
app.use('/api', CustomerRoutes);
app.use('/api', F_login_routes);
app.use('/api', C_login_routes);
app.use('/api', A_login_routes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);


//For Get Operartions
app.use('/api',customer_name);
app.use('/api',Farmer_name);
app.use('/api',categoryInfo);



//For Delete Operation
app.use('/api',detele_customer);
app.use('/api',detele_farmer);


//For update Operation
app.use('/api',UpdateCus);
app.use('/api',Updatefar);
app.use('/api',UpdateCat);


// Start the server
const PORT = 47047;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});