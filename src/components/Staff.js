import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Staff.css';

const Staff = () => {
  // State to manage form inputs
  const [staff, setStaff] = useState({
    name: '',
    position: '',
    contact: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevStaff) => ({
      ...prevStaff,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
      });

      const data = await response.json();
      console.log('Added Staff:', data);

      // Optionally, reset form or provide feedback
      setStaff({ name: '', position: '', contact: '' });
    } catch (error) {
      console.error('Error adding staff:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Staff Management</h1>
        <form className="staff-form" onSubmit={handleSubmit}>
          <label>
            Staff Name:
            <input
              type="text"
              name="name"
              value={staff.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={staff.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={staff.contact}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Staff</button>
        </form>
      </div>
    </div>
  );
};

export default Staff;
