import React, { useState } from 'react';
import axios from 'axios';
import '../styles/chatbot.css'; // Import the CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to send a message
  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to state
    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { prompt: input });
      console.log('API Response:', response.data); // Debugging API response

      if (response.data && response.data.reply) {
        const botMessage = { sender: 'bot', text: response.data.reply };

        // Update state with both user and bot messages
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        const errorMessage = { sender: 'bot', text: 'No reply received from the server.' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }

    setInput('');
  };

  // Log messages to the console for debugging
  console.log('Messages:', messages);

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
