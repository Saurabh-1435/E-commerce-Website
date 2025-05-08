import React from 'react';
import './Navbar.css';

// Import the logo image
import logo from '../assets/images/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  return (
    <header>
      {/* <div className="top-announcement">
        Sign up and receive -10% OFF your first order
      </div> */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Shilpkar Logo" className="logo" />
          <span className="logo-text">Shilpkar</span>
        </div>
        <ul className="nav-links">
          <li>New Arrivals</li>
          <li>Shop</li>
          {/* <li>Lookbook</li> */}
          <li>About</li>
          <li>Blog</li>
          {/* <li>Let's Act</li> */}
        </ul>
        <ul className="nav-right">
          {/* <li>Search</li> */}
          {/* <li>EN</li> */}
          <li>Wishlist</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
