
import './App.css';

import Welcome from './components/Welcome';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Landing from './components/landing';
import Layout from './components/layout';
import RentForm from './components/rent/rent-form';

function App() {
  return (
    <div className=''>

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Welcome />} />
          <Route path='' element={<Layout />}>
              <Route path='/landing' element={<Landing />} />
              <Route path='/rent-form' element={<RentForm />} />

          </Route>
          

          


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;