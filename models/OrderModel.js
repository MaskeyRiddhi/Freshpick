const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required: true,
    },
    country: {
        type: String,
        required: true
    }
    // ,productId: {
    //      type: mongoose.Schema.Types.ObjectId,
    //       ref: "products" 
    // }
    
});

module.exports = mongoose.model('Order', orderSchema);
