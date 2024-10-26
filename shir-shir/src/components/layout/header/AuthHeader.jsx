import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch.js"
import Loading from "../../utils/Loading/index.jsx"
import Error from "../../utils/Error/index.jsx"

const AuthHeader = () => {
  const navigate = useNavigate()
  const {data, loading, error} = useFetch('http://localhost:5000/users/current-user')


  if(loading)
    return <Loading />

  if(error)
    return <Error message={error} />


  if(data){
    const user = data.data

  return (
    <div >        
        {
          user ?
          <div className='logged-in'>
            <button onClick={() => localStorage.removeItem('accessToken')} className='signout'>signout</button>
            
            <div onClick={() => navigate('/dashboard')} className='user-profile'>{user.username.slice(0, 2).toUpperCase()}</div>
          </div>
          :
          <div className='auth-buttons'>
            <Link to='/signup' className='signup'>signup</Link>
            <Link to='/signin' className='signin'>signin</Link>

          </div>

        }
    </div>
  )}
}

export default AuthHeader