import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'></div>

        <p>&copy; Shirshir. All rights reserved.</p>

        <div className='links'>
            <Link to='/about'>about us</Link>
            <Link to='/contact-us'>contact us</Link>

        </div>

    </div>
  )
}

export default Footer