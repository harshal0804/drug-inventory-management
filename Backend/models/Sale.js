const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
    quantity: Number,
    saleDate: Date
});

module.exports = mongoose.model('Sale', SaleSchema);
