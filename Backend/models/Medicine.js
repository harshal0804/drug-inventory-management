const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: String,
    category: String,
    storeBox: String,
    purchasePrice: Number,
    sellingPrice: Number,
    quantity: Number,
    genericName: String,
    company: String,
    effects: String,
    expireDate: Date
});

module.exports = mongoose.model('Medicine', MedicineSchema);
