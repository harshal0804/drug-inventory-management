const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const medicineRoutes = require('./routes/medicine');
const categoryRoutes = require('./routes/category');
const saleRoutes = require('./routes/sale');
const expenseRoutes = require('./routes/expense');
const staffRoutes = require('./routes/staff');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



// API Routes
app.use('/api/medicines', medicineRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/staff', staffRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
