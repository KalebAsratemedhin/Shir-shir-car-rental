import  './index.css';
import { Link } from 'react-router-dom';
import CarsList from '../rent';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Shir Shir Car Rentals</h1>
        <p>Rent a car, whenever and wherever you need it.</p>
        <div className="landing-buttons">
          <Link to="/signup" className="btn primary-btn">Get Started</Link>
        </div>
      </header>

      

      <section className="services-container">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>24/7 Customer Support</h3>
            <p>We provide round-the-clock support for all your rental needs.</p>
          </div>
          <div className="service-card">
            <h3>Flexible Rental Periods</h3>
            <p>Rent for a day, a week, or even a month with flexible options.</p>
          </div>
          <div className="service-card">
            <h3>Wide Range of Vehicles</h3>
            <p>Choose from economy cars, SUVs, luxury vehicles, and more.</p>
          </div>
          <div className="service-card">
            <h3>Affordable Rates</h3>
            <p>Enjoy competitive pricing with no hidden fees.</p>
          </div>
        </div>
      </section> 

      <section className="home-container">
        <CarsList />
      </section> 
    </div>
  );
}

export default LandingPage;
