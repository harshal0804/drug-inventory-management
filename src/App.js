import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MedicineList from './components/MedicineList';
import AddMedicine from './components/AddMedicine';
import MedicineCategory from './components/MedicineCategory';
import AllSales from './components/AllSales';
import Expenses from './components/Expenses';
import Reporting from './components/Reporting';
import Staff from './components/Staff';
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medicine-list" element={<MedicineList />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
          <Route path="/medicine-category" element={<MedicineCategory />} />
          <Route path="/all-sales" element={<AllSales />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;