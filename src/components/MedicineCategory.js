import React from 'react';
import Sidebar from './Sidebar';
import '../styles/MedicineCategory.css';

const MedicineCategory = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Medicine Category</h1>
        <form className="medicine-category-form">
          <label>
            Category Name:
            <input type="text" name="categoryName" />
          </label>
          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default MedicineCategory;
