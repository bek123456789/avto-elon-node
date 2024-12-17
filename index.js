require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http'); // Import http module to create a server
const socketIo = require('socket.io'); // Import socket.io

// Import routes
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const mototexnikaRoutes = require('./routes/mototexnikaRoutes');
const newsRoutes = require('./routes/newsRoutes');

// Import category and product routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/mototexnika', mototexnikaRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/categories', categoryRoutes); // Add category routes
app.use('/api/products', productRoutes);   // Add product routes

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://realmadridn977:eh9NlxWxNVlpARjG@bekzod-node.ylms7.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Socket.IO configuration
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle sendMessage event
    socket.on('sendMessage', (message) => {
        console.log('Received message:', message);

        // Broadcast message to all connected clients
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
