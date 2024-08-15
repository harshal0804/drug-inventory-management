import React from 'react';
import Sidebar from './Sidebar';
import '../styles/MedicineList.css';

const MedicineList = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Medicine List</h1>
        <table className="medicine-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Store, Box</th>
              <th>Purchase Price</th>
              <th>Selling Price</th>
              <th>Quantity</th>
              <th>Generic Name</th>
              <th>Company</th>
              <th>Effects</th>
              <th>Expire Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows dynamically here */}
            <tr>
              <td>Example Medicine</td>
              <td>Fever</td>
              <td>A1</td>
              <td>$5</td>
              <td>$6</td>
              <td>5404</td>
              <td>Paracetamol</td>
              <td>Company X</td>
              <td>Dizziness</td>
              <td>03-02-2024</td>
              <td>Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineList;
