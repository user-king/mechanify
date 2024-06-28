// src/components/Footer.js
import React from 'react';
import '../assets/styles/Footer.css';
import mechanifyLogo from '../assets/images/mechanify_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Category</h4>
          <ul>
            <li><a href="/">Garage Services</a></li>
            <li><a href="/">Engine Repair</a></li>
            <li><a href="/">Door Step Service</a></li>
            <li><a href="/">Shoker Repair</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Policy</h4>
          <ul>
            <li><a href="/">Return Policy</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="social-media">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="address">
            <p><i className="fas fa-map-marker-alt"></i> Gurgaon Haryana India</p>
          </div>
          <div className="copyright">
            <p>&copy; 2024 | Mechanify Services Pvt Ltd</p>
            <p>All Rights Reserved</p>
          </div>
          <div className="logo-footer">
            <img src={mechanifyLogo} alt="Mechanify Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
