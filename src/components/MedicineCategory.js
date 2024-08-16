import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/MedicineCategory.css';

const MedicineCategory = () => {
  const [category, setCategory] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Added Category:', data);
      setCategory({ name: '' });
      alert('Category added successfully');
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Failed to add category');
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Medicine Category</h1>
        <form className="medicine-category-form" onSubmit={handleSubmit}>
          <label>
            Category Name:
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default MedicineCategory;
