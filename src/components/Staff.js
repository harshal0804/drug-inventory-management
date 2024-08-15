import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Staff.css';

const Staff = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Staff Management</h1>
        <form className="staff-form">
          <label>
            Staff Name:
            <input type="text" name="staffName" />
          </label>
          <label>
            Position:
            <input type="text" name="position" />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" />
          </label>
          <button type="submit">Add Staff</button>
        </form>
      </div>
    </div>
  );
};

export default Staff;
