import React from 'react';
import Sidebar from './Sidebar';
import '../styles/AllSales.css';

const AllSales = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>All Sales</h1>
        <table className="sales-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows dynamically here */}
            <tr>
              <td>03-02-2024</td>
              <td>Example Medicine</td>
              <td>10</td>
              <td>$60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSales;
