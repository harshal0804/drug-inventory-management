const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: Date
});

module.exports = mongoose.model('Expense', ExpenseSchema);
