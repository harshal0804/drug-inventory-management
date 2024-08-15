const express = require('express');
const Medicine = require('../models/Medicine');
const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json(medicines);
    } catch (error) {
        console.error('Error fetching medicines:', error);
        res.status(500).json({ message: 'Failed to fetch medicines' });
    }
});

// Add a new medicine
router.post('/', async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log incoming data
        const newMedicine = new Medicine(req.body);
        const savedMedicine = await newMedicine.save();
        console.log('Saved medicine:', savedMedicine); // Log saved data
        res.status(201).json(savedMedicine);
    } catch (error) {
        console.error('Error adding new medicine:', error);
        res.status(400).json({ message: 'Failed to add medicine' });
    }
});

// Get a single medicine by ID
router.get('/:id', async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json(medicine);
    } catch (error) {
        console.error('Error fetching medicine by ID:', error);
        res.status(500).json({ message: 'Failed to fetch medicine' });
    }
});

// Update a medicine by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMedicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json(updatedMedicine);
    } catch (error) {
        console.error('Error updating medicine:', error);
        res.status(400).json({ message: 'Failed to update medicine' });
    }
});

// Delete a medicine by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
        if (!deletedMedicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({ message: 'Medicine deleted' });
    } catch (error) {
        console.error('Error deleting medicine:', error);
        res.status(500).json({ message: 'Failed to delete medicine' });
    }
});

module.exports = router;
