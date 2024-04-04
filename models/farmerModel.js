const mongoose = require('mongoose');

const farmerSchema  = new mongoose.Schema({
    username:{
        type: String,
        requrired:true,
        unique: true
    } ,
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type:String, 
        required:true},

    phone_number:{
        type:Number, 
        required: true, 
        unique: true}
});

module.exports = mongoose.model('Farmer',farmerSchema,"Farmer");