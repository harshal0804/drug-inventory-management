import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to the Drug Inventory Management System.</p>
      </div>
    </div>
  );
};

export default Dashboard;
