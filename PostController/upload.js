// const path = require('path');
// const cloudinary = require('cloudinary').v2;
// const fs = require('fs');

// const uploadProductImageLocal = async (req, res) => {
//   if (!req.files) {
//     throw new CustomError.BadRequestError('No File Uploaded');
//   }
//   const productImage = req.files.image;
//   if (!productImage.mimetype.startsWith('image')) {
//     throw new CustomError.BadRequestError('Please Upload Image');
//   }
//   const maxSize = 1024 * 1024;
//   if (productImage.size > maxSize) {
//     throw new CustomError.BadRequestError('Please upload image smaller 1MB');
//   }
//   const imagePath = path.join(
//     __dirname,
//     `../public/uploads/' + ${productImage.name}`);
//   await productImage.mv(imagePath);
//   return res
//     .status(StatusCodes.OK)
//     .json({ image: { src:` /uploads/${productImage.name}` } });
// };

// const uploadProductImage = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(
//       req.files.image.tempFilePath,
//       {
//         use_filename: true,
//         folder: 'file-upload',
//       }
//     );
//     fs.unlinkSync(req.files.image.tempFilePath);
//     return res.status(200).json({ image: { src: result.secure_url } });  
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   uploadProductImage,
// };


const Product = require('../models/productModel'); // Import your Product model

const uploadProductImage = async (req, res) => {
  try {
    // Assuming req.body contains product data like name, price, description, etc.
    const { name, price, description } = req.body;

    // Assuming req.file contains the uploaded image
    const image = req.file;

    // Create a new product instance with the received data
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl: image.path // Assuming you store the image path in your Product model
    });

    // Save the product to the database
    await newProduct.save();

    return res.status(200).json({ success: true, message: 'Product created successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create product', error: error.message });
  }
};
