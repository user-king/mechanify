import React from 'react';
import '../assets/styles/Login.css';

const Login = () => {
  return (
    <div className="login-popup">
      <div className="login-container">
        <h1 className="login-title">Book Your Two Wheeler Service</h1>
        <h2 className="login-subtitle">Register & Login</h2>
        <div className="login-form">
          <input type="text" className="login-input" placeholder="Enter Your Name" />
          <input type="text" className="login-input" placeholder="Mobile Number" />
          <select className="login-select">
            <option>Choose Vehicle</option>
            {/* Add more options as needed */}
          </select>
          <button className="login-button">Login</button>
        </div>
        <div className="login-divider">
          <span>OR</span>
        </div>
        <button className="login-social google">Continue with Google</button>
        <button className="login-social apple">Continue with Apple</button>
        <p className="login-terms">
          By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
