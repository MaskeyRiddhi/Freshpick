const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength: 15
    },
    phone_number:{
        type:Number,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('admin',adminSchema,"Admin");