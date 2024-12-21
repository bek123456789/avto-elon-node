const mongoose = require('mongoose');

const YukMashinalariSchema = new mongoose.Schema({
    texnikaTuri: {
        type: String,
        required: true
    },
    marka: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuelType: {
        type: String,  // e.g., "Diesel", "Petrol"
        required: true
    },
    images: [{
        type: String // URLs of images
    }],
    description: {
        type: String
    },
    sellingAddress: {
        type: String,  // The address where the vehicle is being sold
        required: true
    },
    phoneNumber: {
        type: String,  // Main contact number
        required: true
    },
    extraPhoneNumber: {
        type: String  // Additional contact number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('YukMashinalari', YukMashinalariSchema);
