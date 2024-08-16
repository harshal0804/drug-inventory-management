const express = require('express');
const Staff = require('../models/Staff');
const router = express.Router();

// Add a new staff member
router.post('/', async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    console.error('Error adding staff:', error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
