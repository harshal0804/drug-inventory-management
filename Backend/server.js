const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import the latest Google GenerativeAI client library (assuming v2+)
const { GenerativeModel } = require('@google/generative-ai');

// API routes (replace with your actual routes)
const medicineRoutes = require('./routes/medicine'); // Replace with your medicine routes
const categoryRoutes = require('./routes/category'); // Replace with your category routes
const saleRoutes = require('./routes/sale'); // Replace with your sale routes
const expenseRoutes = require('./routes/expense'); // Replace with your expense routes
const staffRoutes = require('./routes/staff'); // Replace with your staff routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection (using async/await for clarity)
async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit on connection failure
    }
}

// Configure Google GenerativeAI (if using v1 API)
if (!GenerativeModel) {
    const genai = require('googleapis');
    genai.configure({ api_key: process.env.GEMINI_API_KEY });
}

let model;

async function initializeChatbot() {
    try {
        if (GenerativeModel) {
            model = new GenerativeModel({
                model_name: "gemini-1.5-flash", // Replace with your model name
                generationConfig: {
                    // Your generation config options here
                },
                system_instruction: `
                    You are a helpful, knowledgeable, and polite virtual assistant for a drug inventory management system website.
                    Your primary role is to assist users with queries related to the third-party medicine store, including sales data,
                    available medicines, stock levels, order tracking, and other features of the website.
                    Primary Functions:
                    - Provide Information: Help users access data on sales, stock availability, available medicines, order lists, and location services.
                    - Order Tracking: Assist users in tracking their orders using geofencing data.
                    - Feature Guidance: Encourage users to explore all the website features and guide them on how to use these features effectively.
                    - Problem Solving: Address user queries and resolve issues related to the website's functionalities.
                    - Behavioral Guidelines: Maintain a friendly and professional tone. Offer clear and concise information. Proactively suggest helpful actions based on user inquiries.
                `,
            });
        } else {
            console.warn('GenerativeModel is not available, using fallback...');
            // Add appropriate fallback logic if needed
        }
    } catch (error) {
        console.error("Error initializing chatbot:", error);
        // Handle the error, e.g., return a default model or exit gracefully
    }
}

async function startServer() {
    await connectMongo();

    try {
        await initializeChatbot();
    } catch (error) {
        console.error("Error initializing chatbot:", error);
        // Handle the error, e.g., return a default model or exit gracefully
    }

    // ... rest of your code using model

    // API Routes (assuming these are defined in separate route files)
    app.use('/api/medicines', medicineRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/sales', saleRoutes);
    app.use('/api/expenses', expenseRoutes);
    app.use('/api/staff', staffRoutes);

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();