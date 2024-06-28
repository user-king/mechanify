// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import mechanifyLogo from '../assets/images/mechanify_logo.png';
import userIcon from '../assets/images/user_icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={mechanifyLogo} alt="Mechanify Logo" className="logo-header" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        {/* <div className="dropdown">
          <button className="dropbtn">Services 
            <i className="arrow-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/service1">Service 1</Link>
            <Link to="/service2">Service 2</Link>
            <Link to="/service3">Service 3</Link>
          </div>
        </div> */}

        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/testimonials" className="nav-link">Testimonials</Link>
      </nav>
      <div className="user-options">
        <button className="btn">My Orders</button>
        <button className="btn">Login</button>
        <img src={userIcon} alt="User Icon" className="user-icon" />
      </div>
    </header>
  );
};

export default Header;

