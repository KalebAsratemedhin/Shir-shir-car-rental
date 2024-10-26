import React from 'react'

import './index.css'
import { Link } from 'react-router-dom'

const CarCard = ({car}) => {
  return (
    <div className='card'>
        <div className='image'>
            <img src={'http://localhost:5000/' + car.photo} alt="" />
        </div>
        <div className='description'>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Model:</strong> {car.model}</p>
            
            <p><strong>Age:</strong> {car.age} years</p>
            <p><strong>Count:</strong> {car.count}</p>
            <p><strong>Price per Day:</strong> {car.price} ETB</p>
            <p><strong>Description:</strong> {car.description}</p>
            <button className="btn rent-btn">Rent Now</button>

        </div>
    </div>
  )
}

export default CarCard


