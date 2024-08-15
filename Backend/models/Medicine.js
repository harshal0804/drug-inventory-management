const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    storeBox: { type: String, required: false },
    purchasePrice: { type: Number, required: false },
    sellingPrice: { type: Number, required: false },
    quantity: { type: Number, required: false },
    genericName: { type: String, required: false },
    company: { type: String, required: false },
    effects: { type: String, required: false },
    expireDate: { type: Date, required: false }
});

module.exports = mongoose.model('Medicine', MedicineSchema);
