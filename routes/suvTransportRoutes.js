const express = require('express');
const SuvTransport = require('../models/suvTransportModel');
const router = express.Router();

// Create a new SUV transport entry
router.post('/', async (req, res) => {
    try {
        const { type, price, isAvailable, images, saleLocation, phone } = req.body;

        const suvTransport = new SuvTransport({ type, price, isAvailable, images, saleLocation, phone });
        await suvTransport.save();

        res.status(201).json({ message: 'SUV transport created successfully', suvTransport });
    } catch (error) {
        res.status(500).json({ message: 'Error creating SUV transport', error });
    }
});

// Get all SUV transports
router.get('/', async (req, res) => {
    try {
        const suvTransports = await SuvTransport.find();
        res.status(200).json(suvTransports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching SUV transports', error });
    }
});

// Get a specific SUV transport by ID
router.get('/:id', async (req, res) => {
    try {
        const suvTransport = await SuvTransport.findById(req.params.id);

        if (!suvTransport) {
            return res.status(404).json({ message: 'SUV transport not found' });
        }

        res.status(200).json(suvTransport);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching SUV transport', error });
    }
});

// Update an SUV transport by ID
router.put('/:id', async (req, res) => {
    try {
        const { type, price, isAvailable, images, saleLocation, phone } = req.body;

        const suvTransport = await SuvTransport.findByIdAndUpdate(
            req.params.id,
            { type, price, isAvailable, images, saleLocation, phone },
            { new: true }
        );

        if (!suvTransport) {
            return res.status(404).json({ message: 'SUV transport not found' });
        }

        res.status(200).json({ message: 'SUV transport updated successfully', suvTransport });
    } catch (error) {
        res.status(500).json({ message: 'Error updating SUV transport', error });
    }
});

// Delete an SUV transport by ID
router.delete('/:id', async (req, res) => {
    try {
        const suvTransport = await SuvTransport.findByIdAndDelete(req.params.id);

        if (!suvTransport) {
            return res.status(404).json({ message: 'SUV transport not found' });
        }

        res.status(200).json({ message: 'SUV transport deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting SUV transport', error });
    }
});

module.exports = router;
