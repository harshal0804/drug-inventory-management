const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Get all expenses
router.get('/', async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// Add a new expense
router.post('/', async (req, res) => {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
});

// Get a single expense by ID
router.get('/:id', async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
});

// Update an expense by ID
router.put('/:id', async (req, res) => {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedExpense);
});

// Delete an expense by ID
router.delete('/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
});

module.exports = router;
