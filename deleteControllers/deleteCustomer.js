const model = require('../models/UserModel');

const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await model.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = deleteCustomer;
