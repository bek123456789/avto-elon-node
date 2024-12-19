const mongoose = require('mongoose');

const suvTransportSchema = new mongoose.Schema({
    type: { type: String, required: true }, // Type of SUV (e.g., Sedan, Pickup)
    price: { type: Number, required: true }, // Price
    isAvailable: { type: Boolean, default: true }, // Availability
    images: [{ type: String }], // Array of image URLs
    saleLocation: { type: String, required: true }, // Sale location
    phone: { type: String, required: true }, // Contact phone number
}, { timestamps: true });

const SuvTransport = mongoose.model('SuvTransport', suvTransportSchema);

module.exports = SuvTransport;
