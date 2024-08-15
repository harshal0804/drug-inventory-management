import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Reporting.css';

const Reporting = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Reporting</h1>
        <p>Generate and view reports here.</p>
        <button className="generate-report-btn">Generate Report</button>
      </div>
    </div>
  );
};

export default Reporting;
