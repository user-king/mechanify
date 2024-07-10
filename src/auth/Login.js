import React from 'react';
import '../assets/styles/Login.css';
import MechanifyLogo from "../assets/images/mechanify_logo_color.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const navigateToOtp = () => {
        navigate('/otp-verification');
    };
    
    return (
        <div className="login-container">
            <div className="login-upper-background"></div>
            <div className="login-lower-background"></div>
            <div className="login-popup">
                <img src={MechanifyLogo} alt="Mechaify" className="login-logo" />
                <h1 className="login-title">Book Your Two Wheeler Service</h1>
                <div className="login-subtitle">Register & Login</div>
                <div className="login-form">
                    <input type="text" className="login-input" placeholder="Enter Your Name" />
                    <input type="text" className="login-input" placeholder="Mobile Number" />
                    <select className="login-select">
                        <option>Choose Vehicle</option>
                    </select>
                    <button className="login-button" onClick={navigateToOtp}>Login</button>
                </div>
                <div className="login-divider">OR<hr /></div>
                <p className="login-terms">
                    By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                </p>
                <button className="login-social google">Continue with Google</button>
                <button className="login-social apple">Continue with Apple</button>
            </div>
        </div>
    );
};

export default Login;
