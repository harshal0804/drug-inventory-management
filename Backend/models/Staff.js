const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: String,
    position: String,
    salary: Number,
    hireDate: Date
});

module.exports = mongoose.model('Staff', StaffSchema);
