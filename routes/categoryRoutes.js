const express = require("express");
const Category = require("../models/cattegory");

const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: "Error fetching categories", error: err });
    }
});

// Add a new category
router.post("/", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: "Error adding category", error: err });
    }
});

module.exports = router;
