import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Expenses.css';

const Expenses = () => {
  const [expense, setExpense] = useState({
    expenseType: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add expense');
      }

      const data = await response.json();
      console.log('Added Expense:', data);

      alert('Expense added successfully!');
      setExpense({ expenseType: '', amount: '', date: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense. Please try again. Error details: ' + error.message);
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
              value={expense.expenseType}
              onChange={handleChange}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={expense.date}
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
