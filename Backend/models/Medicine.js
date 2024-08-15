const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: String,
    storeBox: String,
    purchasePrice: Number,
    sellingPrice: Number,
    genericName: String,
    company: String,
    effects: String,
    expireDate: Date
});

module.exports = mongoose.model('Medicine', MedicineSchema);
