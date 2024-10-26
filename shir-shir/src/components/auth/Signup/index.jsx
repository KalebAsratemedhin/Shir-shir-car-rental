import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'
import { useNavigate } from 'react-router-dom';
import useMutate from '../../../hooks/useMutation';
import Loading from '../../utils/Loading';
import Success from '../../utils/Success';
import Error from '../../utils/Error';


const Signup = () => {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const {mutate, loading, error, success, data} = useMutate('http://localhost:5000/signup', { 
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
      }
  })

  useEffect(() => {
    if(success){
        localStorage.setItem('accessToken', data.accessToken )
        localStorage.setItem('username', data.data.username )

        
    }

    if(localStorage.getItem('accessToken')){
        navigate('/dashboard')
    }

  }, [success])

  const handleClick = async () => {
    mutate({username, email, password})
  }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Signup</div>
            <div className='underline'></div>
        
        </div>
        <div className='input'>
          <div className='inputs'>
            <label htmlFor="username">Username</label>
            <div>
              <img width={30} src={user_icon} alt=""/>
              <input id='username' value={username} onChange={(e) => setUsername(e.target.value) } type="text"/>
            </div>
          </div>

          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <div>
              <img width={30} src={email_icon} alt=""/>
            <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            </div>
          </div>

          <div className='inputs'>
            <label htmlFor="password">Password</label>
            <div>
              <img width={30} src={password_icon} alt=""/>
              <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="text"/>
            </div>
          </div>
       

        </div>

        {loading && <Loading />}
        {error && <Error message={error}/>}
        {success && <Success />}


      <button onClick={handleClick}>
        Submit
      </button>
      <p className='auth-link'>Have an account? <Link className='link' to='/signin'>Signin</Link> </p>

      
    </div>
  )
}

export default Signup
