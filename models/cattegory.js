const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: { type: String, required: true }, // Unique ID for category
    name: { type: String, required: true }, // Category name
    image: { type: String, required: true }, // Image URL for the category
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
