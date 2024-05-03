const Farmer_name = require("../models/farmerModel");

const getFarmer = async (req, res) => {
    try {
        const Farmers = await Farmer_name.find();
        res.status(200).json(Farmers);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

module.exports = getFarmer;