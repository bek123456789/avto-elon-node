// routes/mototexnikaRoutes.js
const express = require('express');
const Mototexnika = require('../models/mototexnikaModel');

const router = express.Router();

// Create a new mototexnika listing
router.post('/', async (req, res) => {
    try {
        const newMototexnika = new Mototexnika(req.body);
        const savedMototexnika = await newMototexnika.save();
        res.status(201).json(savedMototexnika);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all mototexnika listings
router.get('/', async (req, res) => {
    try {
        const listings = await Mototexnika.find();
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific mototexnika listing by ID
router.get('/:id', async (req, res) => {
    try {
        const listing = await Mototexnika.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: 'Mototexnika not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a mototexnika listing
router.put('/:id', async (req, res) => {
    try {
        const updatedListing = await Mototexnika.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedListing) {
            return res.status(404).json({ message: 'Mototexnika not found' });
        }
        res.status(200).json(updatedListing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a mototexnika listing
router.delete('/:id', async (req, res) => {
    try {
        const deletedListing = await Mototexnika.findByIdAndDelete(req.params.id);
        if (!deletedListing) {
            return res.status(404).json({ message: 'Mototexnika not found' });
        }
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
