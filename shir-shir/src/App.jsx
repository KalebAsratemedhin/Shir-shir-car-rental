
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Signup from './components/auth/Signup/index';
import Signin from './components/auth/Signin/index';
import Landing from './components/landing';
import Layout from './components/layout';
import RentForm from './components/rent/rent-form';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className=''>

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='' element={<Layout />}>
              <Route path='/' element={<Landing />} />
              <Route path='/rent-form' element={<RentForm />} />
              <Route path='/dashboard' element={<Dashboard />} />


          </Route>
          

          


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;