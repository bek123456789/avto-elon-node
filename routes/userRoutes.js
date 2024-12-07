const express = require('express');
const User = require('../models/User');
const router = express.Router();  

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = new User({ email, name, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

module.exports = router;
