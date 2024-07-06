import React from 'react';
import '../assets/styles/OurStores.css';
import storeLogo from '../assets/images/mechanify_logo_color.png';
import storeImage1 from '../assets/images/mechanifybranding.png';
import searchIcon from '../assets/images/search_icon.png';

const OurStores = () => {
  return (
    <div className="our-store-container">
      <img src={searchIcon} alt="Search" className="store-search-icon" />
      <div className='our-store-header-row'>
        <div className="our-store-header">
          <h1>Our Stores</h1>
        </div>
        <img src={storeLogo} alt="Store" className="store-logo" />
      </div>

      <div className="store-images">
        <div className="store-thumbnails">
          <img src={storeImage1} alt="Store 1" className="store-thumbnail" />
          <img src={storeImage1} alt="Store 2" className="store-thumbnail" />
          <img src={storeImage1} alt="Store 3" className="store-thumbnail" />
          <img src={storeImage1} alt="Store 4" className="store-thumbnail" />
          <img src={storeImage1} alt="Store 5" className="store-thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default OurStores;
