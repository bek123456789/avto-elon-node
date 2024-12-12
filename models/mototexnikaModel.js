// models/mototexnikaModel.js
const mongoose = require('mongoose');

const MototexnikaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    brand: {
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
    negotiable: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Mototexnika', MototexnikaSchema);
