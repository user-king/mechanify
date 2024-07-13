import React, { useState } from 'react';
import '../assets/styles/OtpVerification.css';
import MechanifyLogo from "../assets/images/mechanify_logo_color.png";
import { useNavigate } from 'react-router-dom';


const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Focus next input
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };


  const navigateToAwesome = () => {
      navigate('/awesome');
  };


  return (
    <div className="otp-container">
      <div className="otp-upper-background"></div>
      <div className="otp-lower-background"></div>
      <div className="otp-popup">
        {/* <img src={MechanifyLogo} alt="Mechaify" className="otp-logo" /> */}
        <div className="otp-title">Almost done</div>
        <div className="otp-subtitle">Please type the code we sent you in your email</div>
        <div className="otp-input-container">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              className="otp-input"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <div className="otp-resend">
          Resend Code in 00:30
        </div>
        <button className="otp-button" onClick={navigateToAwesome}>Verify</button>
        <p className="otp-support">
          Can't access to your email? <a href="#">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
