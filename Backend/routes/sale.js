const express = require('express');
const Sale = require('../models/Sale');
const router = express.Router();

// Get all sales
router.get('/', async (req, res) => {
    const sales = await Sale.find();
    res.json(sales);
});

// Add a new sale
router.post('/', async (req, res) => {
    const newSale = new Sale(req.body);
    const savedSale = await newSale.save();
    res.json(savedSale);
});

// Get a single sale by ID
router.get('/:id', async (req, res) => {
    const sale = await Sale.findById(req.params.id);
    res.json(sale);
});

// Update a sale by ID
router.put('/:id', async (req, res) => {
    const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSale);
});

// Delete a sale by ID
router.delete('/:id', async (req, res) => {
    await Sale.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sale deleted' });
});

module.exports = router;
