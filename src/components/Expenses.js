import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Expenses.css';

const Expenses = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Expenses</h1>
        <form className="expenses-form">
          <label>
            Expense Type:
            <input type="text" name="expenseType" />
          </label>
          <label>
            Amount:
            <input type="number" name="amount" />
          </label>
          <label>
            Date:
            <input type="date" name="date" />
          </label>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
