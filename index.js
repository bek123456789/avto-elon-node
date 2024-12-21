require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Import routes
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const mototexnikaRoutes = require('./routes/mototexnikaRoutes');
const newsRoutes = require('./routes/newsRoutes');
const suvTransportRoutes = require('./routes/suvTransportRoutes');

// Import category and product routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

// Import yuk mashinalari route
const yukMashinalariRoutes = require('./routes/yukMashinalariRoutes'); // Import the new route

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Adjust this to specific origins if required
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing of JSON data

// Routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/mototexnika', mototexnikaRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/suvTransports', suvTransportRoutes);

// Add the new yuk mashinalari route
app.use('/api/yukMashinalari', yukMashinalariRoutes); // Mount the route

// MongoDB connection string (replace with your own)
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
