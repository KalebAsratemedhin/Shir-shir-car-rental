import './index.css';
import { Link } from 'react-router-dom';

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

      <section className="home-container">
        <h2>Available Cars for Rent</h2>
        <div className="search-filter">
          <input type="text" placeholder="Search cars..." className="search-bar" />
          <select className="filter-dropdown">
            <option value="">Filter by Type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div className="car-list">
          <div className="car-card">
            <img src="car1.jpg" alt="Car Model 1" className="car-image" />
            <h3>Car Model 1</h3>
            <p>$50/day</p>
            <button className="btn rent-btn">Rent Now</button>
          </div>
          <div className="car-card">
            <img src="car2.jpg" alt="Car Model 2" className="car-image" />
            <h3>Car Model 2</h3>
            <p>$60/day</p>
            <button className="btn rent-btn">Rent Now</button>
          </div>
          <div className="car-card">
            <img src="car3.jpg" alt="Car Model 3" className="car-image" />
            <h3>Car Model 3</h3>
            <p>$55/day</p>
            <button className="btn rent-btn">Rent Now</button>
          </div>
          {/* Add more car cards as needed */}
        </div>
      </section>

      {/* Services Section */}
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
    </div>
  );
}

export default LandingPage;

