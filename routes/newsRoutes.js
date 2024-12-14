const express = require('express');
const News = require('../models/newsModel');
const router = express.Router();

// @route    GET /api/news
// @desc     Get all news articles
// @access   Public
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 }); // Sort by date (newest first)
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

// @route    POST /api/news
// @desc     Add a new news article
// @access   Public
router.post('/', async (req, res) => {
    const { img, description, date } = req.body;

    // Validate required fields
    if (!img || !description) {
        return res.status(400).json({ error: 'Image and description are required' });
    }

    try {
        const newNews = new News({
            img,
            description,
            date: date || undefined, // Use provided date or default to current timestamp
        });

        await newNews.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create news article' });
    }
});

// @route    DELETE /api/news/:id
// @desc     Delete a news article
// @access   Public
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNews = await News.findByIdAndDelete(id);

        if (!deletedNews) {
            return res.status(404).json({ error: 'News article not found' });
        }

        res.status(200).json({ message: 'News article deleted', deletedNews });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete news article' });
    }
});

module.exports = router;
