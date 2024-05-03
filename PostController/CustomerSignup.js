const model = require('../models/UserModel');

const createCustomer = async (req, res) => {
    try {
        const Customer = await model.create(req.body);
        res.status(201).json(Customer);

    }catch(error){
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}           
module.exports = createCustomer;



