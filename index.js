require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http'); // Import http module to create a server
const socketIo = require('socket.io'); // Import socket.io

const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/messages', messageRoutes);

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://realmadridn977:eh9NlxWxNVlpARjG@bekzod-node.ylms7.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.error('MongoDB connection error:', err));


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);


    socket.on('sendMessage', (message) => {
        console.log('Received message:', message);


        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
