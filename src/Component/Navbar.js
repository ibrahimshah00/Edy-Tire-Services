import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggler" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
