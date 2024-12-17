const mongoose = require('mongoose');


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
    },
});


module.exports = mongoose.model('News', newsSchema);
