import React from 'react'
import '../assets/styles/MechanifyPass.css';
import MechanifyLogo from '../assets/images/mechanify_pass.png';

const MechanifyPass = () => {
    return (
        <div className="mechanify-container">
            <h1>Enjoy Hassel free service With</h1>
            <div className="mechanify-pass">
                <img src={MechanifyLogo} alt="Mechanify Pass" className="mechanify-pass"  />
            </div>
            <h1>At Just 99 only</h1>
            <h3>T&C Apply</h3>
        </div>
    );
}

export default MechanifyPass;
