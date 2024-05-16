const model = require('../models/checkout');

const createCategory = async (req, res) => {
    try {
        const category = await model.create(req.body);
        res.status(201).json(category);

    } catch(error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

module.exports = createCategory;
