import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

const Header = () => {

  const user = null;
  return (
    <div className='header'>
        <div className='logo'>
          <h1>Shir Shir</h1>

        </div>

        {/* <div className='search-bar'>
            <input type="search" />

        </div> */}


        
        {
          user ?
          <div className='user-profile'></div>
          :
          <div className='auth-buttons'>
            <Link to='/signup' className='signup'>signup</Link>
            <Link to='/signin' className='signin'>signin</Link>

          </div>

        }
    </div>
  )
}

export default Header