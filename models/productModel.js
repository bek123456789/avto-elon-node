const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true }, // Unique ID
    name: { type: String, required: true }, // Product name
    price: { type: Number, required: true }, // Product price
    image: { type: String, required: true }, // Image URL
    added_at: { type: Date, required: true }, // Date when product was added
    engine_size: { type: String, required: true }, // Engine size
    transmission: { type: String, required: true }, // Transmission type
    mileage: { type: String, required: true }, // Mileage
    fuel_type: { type: String, required: true }, // Fuel type
    color: { type: String, required: true }, // Car color
    body_type: { type: String, required: true }, // Car body type
    drive: { type: String, required: true }, // Drive type
    category: { type: String, required: true }, // Category name
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
