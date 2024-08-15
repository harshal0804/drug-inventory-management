import React from 'react';
import Sidebar from './Sidebar';
import '../styles/AddMedicine.css';

const AddMedicine = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Add Medicine</h1>
        <form className="add-medicine-form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
          <label>
            Store, Box:
            <input type="text" name="store" />
          </label>
          <label>
            Purchase Price:
            <input type="text" name="purchasePrice" />
          </label>
          <label>
            Selling Price:
            <input type="text" name="sellingPrice" />
          </label>
          <label>
            Quantity:
            <input type="text" name="quantity" />
          </label>
          <label>
            Generic Name:
            <input type="text" name="genericName" />
          </label>
          <label>
            Company:
            <input type="text" name="company" />
          </label>
          <label>
            Effects:
            <input type="text" name="effects" />
          </label>
          <label>
            Expire Date:
            <input type="date" name="expireDate" />
          </label>
          <button type="submit">Add Medicine</button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
