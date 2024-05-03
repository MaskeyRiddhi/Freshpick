const customer_name = require("../models/UserModel");

const getCustomer = async (req, res) => {
    try {
        const customers = await customer_name.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

module.exports = getCustomer;