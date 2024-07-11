import React from 'react';
import serviceImage from '../assets/images/service.png';
import '../assets/styles/About.css';
import mechanifyLogo from '../assets/images/mechanify_black.png';
import closeIcon from '../assets/images/close_icon.png';
import searchIcon from '../assets/images/search_icon.png';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="top-right-buttons">
        <div className="help-button">
          How Can We Help You?
          <img src={closeIcon} alt="Close" className="close-icon" />
        </div>
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      <div className="about-us-content">
        <div className="text-section">
          <h4>Tag Line</h4>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="image-section">
          <img src={serviceImage} alt="Service" />
          <div className="overlay">
            <h2>Eiustmod comm</h2>
            <p><img src={mechanifyLogo} alt="Mechanify" className="mechanify-logo" /> Connect</p>
            <p><i className="fas fa-share-alt"></i> Share</p>
            <p><i className="fas fa-paper-plane"></i> Book Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
