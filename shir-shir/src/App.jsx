
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Signup from './components/auth/Signup/index';
import Signin from './components/auth/Signin/index';
import Landing from './components/landing';
import Layout from './components/layout';
import RentForm from './components/rent/rent-form';
import Dashboard from './components/dashboard';
import PostCarForm from './components/posts/form';
import ProfilePage from './components/profile';
import Protected from './Protected';
import CarsList from './components/rent';

function App() {
  return (
    <div className=''>

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route element={<Layout />}>
              <Route path='/' element={<Landing />} />
              <Route element={<Protected />}>

                <Route path='/profile' element={<ProfilePage />} />
                <Route path="/rent/:carId" element={<RentForm />} />
                <Route path="/rent" element={<CarsList />} />

                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/post' element={<PostCarForm />} />
              </Route>
              



          </Route>
          

          


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;