const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    selectedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] // Assuming 'Item' is your item schema
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Checkout', checkoutSchema);
