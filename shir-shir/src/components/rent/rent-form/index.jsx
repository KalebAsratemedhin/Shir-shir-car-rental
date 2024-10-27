import React, { useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import useMutate from '../../../hooks/useMutation';
import CarCard from '../../posts/card';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';

const RentCarForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [duration, setDuration] = useState('');
  const {carId} = useParams()

  console.log('carId', carId)

  const {loading: carLoading, error: carError, success: carSuccess, data: car} = useFetch(`http://localhost:5000/posts/${carId}`)


  const {mutate, loading, error, success} = useMutate('http://localhost:5000/rents/', {
    method: 'POST',
    headers: {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + localStorage.getItem('accessToken')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, contact, duration, carId })
    
  };

  return (
    <div className="rental-form-container">

      <h2>Rent a Car</h2>

      <div>
        {carLoading && <Loading />}
        {carError && <Error message={carError} />}
        {car && 

        <div>
          <div className='image'>
            <img src={'http://localhost:5000/' + car.data.photo} alt="" />
          </div>
          <div className='description'>
              <p><strong>Brand:</strong> {car.data.brand}</p>
              <p><strong>Model:</strong> {car.data.model}</p>
              
              <p><strong>Age:</strong> {car.data.age} years</p>
              <p><strong>Count:</strong> {car.data.count}</p>
              <p><strong>Price per Day:</strong> {car.data.price} ETB</p>
              <p><strong>Description:</strong> {car.data.description}</p>

          </div>

        </div>
        }


        
      </div>

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
