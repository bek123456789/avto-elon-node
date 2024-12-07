  const mongoose = require('mongoose');

  const messageSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    text: { type: String, default: '' },
    audio: { type: String, default: null },
    video: { type: String, default: null },
    status: { type: String, enum: ['neprichitano', 'view'], default: 'neprichitano' },
  }, { timestamps: true });

  module.exports = mongoose.model('Message', messageSchema);
