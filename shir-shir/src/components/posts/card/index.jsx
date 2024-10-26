import React from 'react'

import './index.css'
import { Link } from 'react-router-dom'





const Card = ({image}) => {
  return (
    <div className='card'>
        <div className='image'>
            <img src={image} alt="" />
        </div>
        <div className='description'>
            <p>CWagon</p>
            <p>Wagons are similar to sedans but have an extended roofline and a hatch door at the rear instead of a trunk. Some, like the Subaru Outback or Audi A4 Allroad, have elevated ground clearance and some rugged body cladding to make them more like a sport-utility vehicle (SUV), but they are nonetheless closely related to sedans.</p>
            <p>1230$</p>
            <Link to='/rent-form' className='button'>rent</Link>
        </div>
    </div>
  )
}

export default Card