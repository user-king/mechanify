// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import mechanifyLogo from '../assets/images/mechanify_logo.png';
import userIcon from '../assets/images/user_icon.png';
import dropdownIcon from '../assets/images/dropdown_icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={mechanifyLogo} alt="Mechanify Logo" className="logo-header" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          <button className="btn1">Home</button>
        </Link>
        {/* <div className="user-options">
          <button className="btn1">Home</button>
        </div> */}

        <div className="dropdown">
          <button className="dropbtn">Services
            <img src={dropdownIcon} alt="dropdown" className="arrow-down" />
          </button>
          <div className="dropdown-content">
            <Link to="/services">Service 1</Link>
            <Link to="/service2">Service 2</Link>
            <Link to="/service3">Service 3</Link>
          </div>
        </div>

        {/* <Link to="/services" className="nav-link">Services</Link> */}
        <Link to="/project" className="nav-link">Projects</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <div className="user-options">
        <button className="btn">My Orders</button>
        <button className="btn">Login</button>
        {/* <img src={userIcon} alt="User Icon" className="user-icon" /> */}
        <div className="user-icon-container">
          <img src={userIcon} alt="User Icon" className="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;

