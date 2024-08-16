const express = require('express');
const router = express.Router();

// Mock function to simulate bot response
const getBotResponse = (prompt) => {
  if (prompt.toLowerCase().includes('hi')) {
    return 'Hello! How can I assist you today?';
  }
  return 'Sorry, I did not understand that.';
};

// API route for chatbot
router.post('/', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ reply: 'No input provided' });
  }

  // Get response from bot function
  const reply = getBotResponse(prompt);

  // Send response
  res.json({ reply });
});

module.exports = router;
