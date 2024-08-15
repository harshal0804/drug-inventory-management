const express = require('express');
const Medicine = require('../models/Medicine');
const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

// Add a new medicine
router.post('/', async (req, res) => {
    const newMedicine = new Medicine(req.body);
    const savedMedicine = await newMedicine.save();
    res.json(savedMedicine);
});

// Get a single medicine by ID
router.get('/:id', async (req, res) => {
    const medicine = await Medicine.findById(req.params.id);
    res.json(medicine);
});

// Update a medicine by ID
router.put('/:id', async (req, res) => {
    const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMedicine);
});

// Delete a medicine by ID
router.delete('/:id', async (req, res) => {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medicine deleted' });
});

module.exports = router;
