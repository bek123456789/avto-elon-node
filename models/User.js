const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // User email
  name: { type: String, required: true }, // User name
  password: { type: String, required: true }, // User password
  phone_number: { type: String, required: true, unique: true }, // User phone number
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('User', userSchema);
