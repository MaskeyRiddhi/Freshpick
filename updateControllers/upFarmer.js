const Farmer = require('../models/farmerModel'); 

// Controller function to update a customer by ID
const updateFarmer = async (req, res) => {
  const farmerId = req.params.farmerId;
  const updatedData = req.body;

  try {
    const farmer = await Farmer.findByIdAndUpdate(farmerId, updatedData, { new: true });

    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    res.json(farmer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = updateFarmer;
