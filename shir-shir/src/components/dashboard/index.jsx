import React from 'react';
import './index.css';

const Dashboard = () => {

  const carsPosted = 10;
  const carsRented = 7;
  const totalEarnings = 1500;
  const activeRentals = [
    { carModel: "Toyota Camry", rentalDate: "2024-10-20", status: "Ongoing" },
    { carModel: "Honda Accord", rentalDate: "2024-10-18", status: "Returned" },
    { carModel: "Ford Mustang", rentalDate: "2024-10-15", status: "Ongoing" },
  ];

  return (
    <div className="dashboard-container">
      <h1>Welcome, Kaleb</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>{carsPosted}</h2>
          <p>Cars Posted</p>
        </div>
        <div className="stat-card">
          <h2>{carsRented}</h2>
          <p>Cars Rented</p>
        </div>
        <div className="stat-card">
          <h2>{totalEarnings} ETB</h2>
          <p>Total Earnings</p>
        </div>
      </div>
      
      <div className="active-rentals">
        <h2>Active Rentals</h2>
        <table className="rentals-table">
          <thead>
            <tr>
              <th>Car Model</th>
              <th>Rental Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeRentals.map((rental, index) => (
              <tr key={index}>
                <td>{rental.carModel}</td>
                <td>{rental.rentalDate}</td>
                <td>{rental.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
