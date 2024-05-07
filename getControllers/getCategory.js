const categoryInfo = require("../models/categoryModel");

const getCategory = async (req, res) => {
    try {
        const Category = await categoryInfo.find();
        res.status(200).json(Category);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

module.exports = getCategory;