const Category = require('../models/categoryModel'); // Import the Category model

// Controller function to update a category by ID
const updateCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const updatedData = req.body;

  try {
    const category = await Category.findByIdAndUpdate(categoryId, updatedData, { new: true });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = updateCategory;
