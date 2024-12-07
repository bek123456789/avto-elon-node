const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Fetch all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  try {
    const { sender, receiver, text } = req.body;
    const message = new Message({ sender, receiver, text });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: 'Error creating message' });
  }
});

module.exports = router;
