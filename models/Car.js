const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true }, // Marka
    model: { type: String, required: true }, // Moshina modeli
    position: { type: String, required: true }, // Pozitsiya
    year: { type: Number, required: true }, // Chiqarilgan yili
    paintCondition: { type: String, required: true }, // Kraska holati
    mileage: { type: Number, required: true }, // Yurgani (km)
    price: { type: Number, required: true }, // Narxi
    img_url: { type: String, required: true }, // Rasm manzili
    description: { type: String, required: true }, // Moshina haqida
    location: { type: String, required: true }, // Manzil
    phone: { type: String, required: true } // Telefon nomer    
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
