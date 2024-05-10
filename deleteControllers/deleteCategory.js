const model = require('../models/categoryModel');

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await model.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = deleteCategory;
