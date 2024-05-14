// const uploadRouter = require('./routes/upload.js');
// const fileUpload = require('express-fileupload');

// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// })

// app.use(fileUpload({ useTempFiles: true }));

// app.use('/api', uploadRouter);

const uploadRouter = require('./routes/upload.routes.js');
const multer = require('multer'); // Import multer for handling multipart/form-data
const upload = multer({ dest: 'uploads/' }); // Configure multer to store uploaded files in the 'uploads' folder

app.use('/api', uploadRouter);
