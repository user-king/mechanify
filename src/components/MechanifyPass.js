import React from 'react'
import '../assets/styles/MechanifyPass.css';
import MechanifyLogo from '../assets/images/mechanify_pass.png';
import BannerImage from '../assets/images/banner_image.png';

const MechanifyPass = () => {
    return (
        <div className="mechanify-container">
            <div className='mechanify-left-container'>
                <h1>Enjoy Hassel free service With</h1>
                <div className="mechanify-pass">
                    <img src={MechanifyLogo} alt="Mechanify Pass" className="mechanify-pass" />
                </div>
                <h1>
                    <span className="white-text">At Just </span>
                    <span className="highlight">₹99 only</span>
                </h1>
                <h3>T&C Apply</h3>
            </div>
            <div className="image-container">
                <img src={BannerImage} alt="Contact" />
            </div>

        </div>

    );
}

export default MechanifyPass;
