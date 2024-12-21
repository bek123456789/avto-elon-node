const express = require('express');
const YukMashinalari = require('../models/yukMashinalari');
const router = express.Router();

// Get all yuk mashinalari
router.get('/', async (req, res) => {
    try {
        const yukMashinalari = await YukMashinalari.find();
        res.json(yukMashinalari);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific yuk mashinasi by ID
router.get('/:id', async (req, res) => {
    try {
        const yukMashinasi = await YukMashinalari.findById(req.params.id);
        if (!yukMashinasi) {
            return res.status(404).json({ error: 'Yuk mashinasi not found' });
        }
        res.json(yukMashinasi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new yuk mashinasi
router.post('/', async (req, res) => {
    try {
        const {
            texnikaTuri,
            marka,
            year,
            price,
            fuelType,
            images,
            description,
            sellingAddress,
            phoneNumber,
            extraPhoneNumber
        } = req.body;

        const newYukMashinasi = new YukMashinalari({
            texnikaTuri,
            marka,
            year,
            price,
            fuelType,
            images,
            description,
            sellingAddress,
            phoneNumber,
            extraPhoneNumber
        });

        const savedYukMashinasi = await newYukMashinasi.save();
        res.status(201).json(savedYukMashinasi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a yuk mashinasi by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            texnikaTuri,
            marka,
            year,
            price,
            fuelType,
            images,
            description,
            sellingAddress,
            phoneNumber,
            extraPhoneNumber
        } = req.body;

        const updatedYukMashinasi = await YukMashinalari.findByIdAndUpdate(
            req.params.id,
            {
                texnikaTuri,
                marka,
                year,
                price,
                fuelType,
                images,
                description,
                sellingAddress,
                phoneNumber,
                extraPhoneNumber
            },
            { new: true }
        );

        if (!updatedYukMashinasi) {
            return res.status(404).json({ error: 'Yuk mashinasi not found' });
        }

        res.json(updatedYukMashinasi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a yuk mashinasi by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedYukMashinasi = await YukMashinalari.findByIdAndDelete(req.params.id);
        if (!deletedYukMashinasi) {
            return res.status(404).json({ error: 'Yuk mashinasi not found' });
        }
        res.json({ message: 'Yuk mashinasi deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
