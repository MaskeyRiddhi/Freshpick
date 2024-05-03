const model = require('../models/farmerModel');

const deletefarmer = async (req, res) => {
    try {
        const deletedfarmer = await model.findByIdAndDelete(req.params.id);
        if (!deletedfarmer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = deletefarmer;
