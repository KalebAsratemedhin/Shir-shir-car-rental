import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/post" className="nav-link" activeClassName="active-link">
        Post
      </NavLink>
      <NavLink to="/rent" className="nav-link" activeClassName="active-link">
        Rent
      </NavLink>
      <NavLink to="/profile" className="nav-link" activeClassName="active-link">
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
