const express = require('express');
const Staff = require('../models/Staff');
const router = express.Router();

// Get all staff members
router.get('/', async (req, res) => {
    const staff = await Staff.find();
    res.json(staff);
});

// Add a new staff member
router.post('/', async (req, res) => {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.json(savedStaff);
});

// Get a single staff member by ID
router.get('/:id', async (req, res) => {
    const staffMember = await Staff.findById(req.params.id);
    res.json(staffMember);
});

// Update a staff member by ID
router.put('/:id', async (req, res) => {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStaff);
});

// Delete a staff member by ID
router.delete('/:id', async (req, res) => {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: 'Staff member deleted' });
});

module.exports = router;
