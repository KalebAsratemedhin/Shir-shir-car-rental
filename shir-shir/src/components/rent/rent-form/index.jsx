import React, { useState } from 'react';
import './index.css';

const RentCarForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedCar, setSelectedCar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rentalData = { name, contact, duration, selectedCar };

    fetch('http://localhost:5000/api/rentals', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentalData),
    })
      .then(response => response.json())
      .then(data => console.log('Rental confirmed:', data))
      .catch(error => console.error('Error renting car:', error));
  };

  return (
    <div className="rental-form-container">
      <h2>Rent a Car</h2>
      <form onSubmit={handleSubmit} className="rent-car-form">
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Contact Information</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label>Rental Duration (Days)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />


        <button type="submit" className="submit-btn">Confirm Rental</button>
      </form>
    </div>
  );
};

export default RentCarForm;
