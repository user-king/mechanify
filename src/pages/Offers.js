import React from 'react';
import '../assets/styles/Offers.css';
import { useNavigate } from 'react-router-dom';
import MechanifyLogo from "../assets/images/mechanify_logo_color.png";

const Offers = () => {
    const navigate = useNavigate();

    const navigateToSuccess = () => {
        navigate('/booking-success');
    }

    return (
        <div className="offers-container">
            <div className="offers-header">
                <button className="back-button" onClick={() => navigate(-1)}>&#8592;</button>
                <h1>Offers and Benefits</h1>
            </div>
            <div className="offers-content">
                <div className="offers-left">
                    <div className="offer-item">
                        <div className="offer-icon">📄</div>
                        <div className="offer-details">
                            <div className="offer-details-header">Apply Coupon</div>
                            <p className="offer-details-text">#Mechanifynewuser</p>
                        </div>
                        <button className="offer-action">a</button>
                    </div>
                    <h2 className="offer-mainheading">Pick up and drop Vehicle</h2>

                    <div className="offer-item">
                        <div className="offer-icon">🛵</div>
                        <div className="offer-details">
                            <div className="offer-details-header">₹199</div>
                            <p className="offer-details-text">Now get pick up and drop off vehicle at your place</p>
                        </div>
                        <div className="offer-toggle">
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                    </div>

                    <h2 className="offer-mainheading">Bike Wash</h2>
                    <div className="offer-item">
                        <div className="offer-icon">🛁</div>
                        <div className="offer-details">
                            <div className='offer-details-header'>₹199</div>
                            <p className='offer-details-text'>Now get pick up and drop off vehicle at your place</p>
                        </div>
                        <div className="offer-toggle">
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                    </div>

                    <h2 className='offer-mainheading'>Redeem Mech Coins</h2>
                    <div className="offer-item">
                        <div className="offer-icon">💰</div>
                        <div className="offer-details">
                            <div className='offer-details-header'>100 coin</div>
                            <p className='offer-details-text'>Redeem Your Mech Coins Get ₹50 off Your Total Amount</p>
                        </div>
                        <div className="offer-toggle">
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                    </div>
                </div>
                <div className="offers-right">
                    <div className="oil-selection">
                        <h2 className='offer-mainheading'>Select Oil</h2>
                        <div className="oil-items">
                            <div className="oil-item selected">Oil Name ₹1,350</div>
                            <div className="oil-item">Oil Name ₹1,350</div>
                            <div className="oil-item">Oil Name ₹1,350</div>
                            <div className="oil-item">Oil Name ₹1,350</div>
                        </div>
                    </div>

                    <h2 className='offer-mainheading'>Spare Parts Need to Change</h2>
                    <div className="spare-parts">
                        <div className="spare-part-item">
                            <div className="spare-part-icon">🛠️</div>
                            <div className="spare-part-details">
                                <div className='offer-details-heading'>Take Permission before replacing any Spare Part.</div>
                            </div>
                            <div className="spare-part-toggle">
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                        </div>
                        <div className="spare-part-item">
                            <div className="spare-part-icon">🔧</div>
                            <div className="spare-part-details">
                                <div className='offer-details-text'>Top Cover With Ring-Pricol </div>
                                <p className='offer-details-heading'>₹199</p>
                            </div>
                            <div className="spare-part-toggle">
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                        </div>
                    </div>
                    <button className="confirm-button" onClick={navigateToSuccess}>Confirm</button>

                </div>
            </div>
        </div>
    );
};

export default Offers;
