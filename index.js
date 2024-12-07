require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(express.json());

// Define base routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// MongoDB Atlas connection string
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://realmadridn977:eh9NlxWxNVlpARjG@bekzod-node.ylms7.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
