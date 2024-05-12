const model = require('../models/productModel');

const deleteProduct = async (req, res) => {
    try {
        const deletedproduct = await model.findByIdAndDelete(req.params.id);
        if (!deletedproduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = deleteProduct;
