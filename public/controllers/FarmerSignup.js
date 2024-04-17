const model = require('../models/farmerModel');

const createFarmer = async (req, res) => {
    try {
        const farmer = await model.create(req.body);
        res.status(201).json(farmer);

    }catch(error){
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}           
module.exports = createFarmer;



