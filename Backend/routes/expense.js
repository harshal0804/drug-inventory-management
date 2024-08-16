const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Add a new expense
router.post('/', async (req, res) => {
  try {
    const { expenseType, amount, date } = req.body;

    if (!expenseType || !amount || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newExpense = new Expense({ expenseType, amount, date });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ message: 'Failed to add expense' });
  }
});

module.exports = router;
