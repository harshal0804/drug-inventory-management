import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Abto Software</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/medicine-list">Medicine List</Link></li>
        <li><Link to="/add-medicine">Add Medicine</Link></li>
        <li><Link to="/medicine-category">Medicine Category</Link></li>
        <li><Link to="/all-sales">All Sales</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/reporting">Reporting</Link></li>
        <li><Link to="/staff">Staff</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
