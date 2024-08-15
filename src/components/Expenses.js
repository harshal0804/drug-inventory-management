import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Expenses.css';

const Expenses = () => {
  // State to manage form inputs
  const [expenses, setExpenses] = useState({
    expenseType: '',
    amount: '',
    date: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(expenses)
      });

      const data = await response.json();
      console.log('Added Expense:', data);

      // Optionally, reset form or provide feedback
      setExpenses({ expenseType: '', amount: '', date: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Expenses</h1>
        <form className="expenses-form" onSubmit={handleSubmit}>
          <label>
            Expense Type:
            <input
              type="text"
              name="expenseType"
              value={expenses.expenseType}
              onChange={handleChange}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={expenses.amount}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={expenses.date}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
