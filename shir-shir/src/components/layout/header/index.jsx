import React from 'react'
import './index.css'
import AuthHeader from './AuthHeader.jsx'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/index.jsx'

const Header = () => {
  const token = localStorage.getItem('accessToken')

  return (
    <div className='header'>
        <div className='logo'>
          <h1>Shir Shir</h1>

        </div>

        <Navbar />

      { token ?
        <AuthHeader /> :
        <div className='auth-buttons'>
          <Link to='/signup' className='signup'>signup</Link>
          <Link to='/signin' className='signin'>signin</Link>
  
        </div>
      }

        
        
    </div>
  )
}

export default Header