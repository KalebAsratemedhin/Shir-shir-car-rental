import './index.css'
import { useState } from 'react';

import password_icon from '../../assets/password.png'
import user_icon from '../../assets/person.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signin = () => {
  
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

  
    const handleClick = async () => {
      const data = {username, password}
      console.log(data, 'data')
  
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
  
      const json = await response.json()
      localStorage.setItem('token', json.token)

      if(json.token){
        navigate('/landing')

      }
  
  
      console.log("this is the signin response data", json)
  
    }
  
    return (
      <div className='container'>
          <div className='header'>
              <div className='text'>Signin</div>
          
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
              <label htmlFor="password">Password</label>
              <div>
                <img width={30} src={password_icon} alt=""/>
                <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="text"/>
              </div>
            </div>
         
  
          </div>
  
        <button onClick={handleClick}>
          Submit
        </button>
        <p className='auth-link'>Don't you have an account? <Link className='link' to='/signup'>Signup</Link> </p>
        
      </div>
    )
  
}

export default Signin