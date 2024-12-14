const mongoose = require('mongoose');

// Define the schema for news articles
const newsSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now, // Automatically set the date to the current timestamp
    },
});


module.exports = mongoose.model('News', newsSchema);
