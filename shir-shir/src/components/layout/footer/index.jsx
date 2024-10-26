import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'></div>

        <div>
            <Link to='/about'>about us</Link>
            <Link to='/contact-us'>contact us</Link>

        </div>

    </div>
  )
}

export default Footer