import React, { useState } from 'react';

const AddMedicine = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [storeBox, setStoreBox] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [genericName, setGenericName] = useState('');
    const [company, setCompany] = useState('');
    const [effects, setEffects] = useState('');
    const [expireDate, setExpireDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const medicineData = {
            name,
            category,
            storeBox,
            purchasePrice,
            sellingPrice,
            quantity,
            genericName,
            company,
            effects,
            expireDate
        };

        try {
            const response = await fetch('http://localhost:5000/api/medicines', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicineData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add medicine');
            }

            const data = await response.json();
            console.log('Medicine added:', data);
            alert('Medicine added successfully!'); // Success alert
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add medicine. Please try again. Error details: ' + error.message); // Error alert
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Store Box" value={storeBox} onChange={(e) => setStoreBox(e.target.value)} />
            <input type="number" placeholder="Purchase Price" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
            <input type="number" placeholder="Selling Price" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <input type="text" placeholder="Generic Name" value={genericName} onChange={(e) => setGenericName(e.target.value)} />
            <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="Effects" value={effects} onChange={(e) => setEffects(e.target.value)} />
            <input type="date" placeholder="Expire Date" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
            <button type="submit">Add Medicine</button>
        </form>
    );
};

export default AddMedicine;
