// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import mechanifyLogo from '../assets/images/mechanify_logo.png';
import userIcon from '../assets/images/user_icon.png';
import dropdownIcon from '../assets/images/dropdown_icon.png';
import menuIcon from '../assets/images/filter.png';
import { useNavigate } from 'react-router-dom';
import Profile from '../pages/Profile';

const Header = ({onMenuToggle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const navigateToLogin = () => {
    navigate('/login');
  };


  return (
    <header className="header">
      <div className="logo-container">
        <img src={mechanifyLogo} alt="Mechanify Logo" className="logo-header" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">
          <button className="btn1">Home</button>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Services
            <img src={dropdownIcon} alt="dropdown" className="arrow-down" />
          </button>
          <div className="dropdown-content">
            <Link to="/services">Service 1</Link>
            <Link to="/booking">My Services</Link>
            <Link to="/service3">Service 3</Link>
          </div>
        </div>
        <Link to="/project" className="nav-link">Projects</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <div className="user-options">
        <button className="btn">My Orders</button>
        <button className="btn" onClick={navigateToLogin}> Login
          {/* <Link to="/login"></Link> */}
        </button>
        <div className="user-icon-container" onClick={toggleProfileMenu}>
          <img src={userIcon} alt="User Icon" className="user-icon" />
        </div>
        
          {isProfileMenuOpen && <Profile />}

      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu Icon" />
      </button>
    </header>
  );
};

export default Header;
