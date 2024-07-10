import React, { useState } from 'react';
import '../assets/styles/OtpVerification.css';
import Done from "../assets/images/done.png";

const Awesome = () => {
 
  
  return (
    <div className="otp-container">
      <div className="otp-upper-background"></div>
      <div className="otp-lower-background"></div>
      <div className="otp-popup">
        <img src={Done} alt="Mechaify" className="otp-logo" />
        <h1 className="otp-title">Awesome</h1>
        <div className="otp-subtitle">You are now logged in to the Mechanify</div>
        <button className="otp-button">Done</button>
      </div>
    </div>
  );
};

export default Awesome;
