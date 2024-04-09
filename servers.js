const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/AuthRoutes.js');
 const path = require('path'); // Add this line to import the path module
const farmerRoutes = require('./routes/farmerRoutes.js')
const CustomerRoutes = require('./routes/CustomerRoutes.js')

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

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');

// const authRoutes = require('./routes/AuthRoutes');
// const path = require('path');

// // MONGODB_URI="mongodb://localhost:27017";

// require('dotenv').config();
// const mongoString = process.env.MONGODB_URI;

// mongoose.connect(mongoString); 
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// });


// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware for parsing JSON body
// app.use(express.json());

// // Routes for authentication
// app.use('/api/auth', authRoutes);

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
