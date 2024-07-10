// src/pages/TrackService.js
import React, { useState } from 'react';
import '../assets/styles/Booking.css';
import bikeImage from '../assets/images/bike.png';
import contactIcon from '../assets/images/contact.png';
import { useNavigate } from 'react-router-dom';

const TrackService = () => {
    const navigate = useNavigate();

    const [isUpcoming, setIsUpcoming] = useState(false);

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="my-booking-page">
            <div className="upper-background"></div>
            <div className="lower-background"></div>
            <div className="my-booking-heading" 
            onClick={handleBackClick}
            style={{ cursor: 'pointer'}}
            >Back</div>

            <div className="my-booking-container">
                <div className="booking-card">
                    <div className="booking-details">
                        <h4>Service Confirmed</h4>
                        <p className="booking-text">21st Sept, 2021 | 15:02</p>
                        <h4>Assign To Mechanic</h4>
                        <p className="booking-text"> Wait For Mechanic Assign</p>

                        <h4>Inspection</h4>
                        <p className="booking-text">Inspection Pending</p>

                        <h4>Work Start</h4>
                        <p className="booking-text">Pending</p>

                        <h4>Service Completed</h4>
                        <p className="booking-text">Pending</p>

                        <h4>Delivered</h4>
                    </div>
                    <div className="divider"></div>
                    <div className="pickup-details">
                        <h3 className='pickup-heading'>Updates and Requests</h3>
                        <div className='service-parts'>
                            <div className='service-part'>
                                <p className='ask'>ASK</p>
                                <p className='multiply'>100x3 = 300</p>
                            </div>
                            <div className='service-part'>
                                <p className='service-part-item'>Break Shoe </p>
                                <div className='toggle-parts'>
                                    <div
                                        className={`toggle-part decline ${isUpcoming === false ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(false)}
                                    >
                                        Decline
                                    </div>
                                    <div
                                        className={`toggle-part approve ${isUpcoming === true ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(true)}
                                    >
                                        Approve
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='service-parts'>
                            <div className='service-part'>
                                <p className='ask'>ASK</p>
                                <p className='multiply'>100x3 = 300</p>
                            </div>
                            <div className='service-part'>
                                <p className='service-part-item'>Clutch Cable</p>
                                <div className='toggle-parts'>
                                    <div
                                        className={`toggle-part decline ${isUpcoming === false ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(false)}
                                    >
                                        Decline
                                    </div>
                                    <div
                                        className={`toggle-part approve ${isUpcoming === true ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(true)}
                                    >
                                        Approve
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='service-parts'>
                            <div className='service-part'>
                                <p className='ask'>Rockman</p>
                                <p className='multiply'> 350</p>
                            </div>
                            <div className='service-part'>
                                <p className='service-part-item'>Chain Set</p>
                                <div className='toggle-parts'>
                                    <div
                                        className={`toggle-part decline ${isUpcoming === false ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(false)}
                                    >
                                        Decline
                                    </div>
                                    <div
                                        className={`toggle-part approve ${isUpcoming === true ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(true)}
                                    >
                                        Approve
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='service-parts'>
                            <div className='service-part'>
                                <p className='ask'>Brand name</p>
                                <p className='multiply'> 350</p>
                            </div>
                            <div className='service-part'>
                                <p className='service-part-item'>Part Name </p>
                                <div className='toggle-parts'>
                                    <div
                                        className={`toggle-part decline ${isUpcoming === false ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(false)}
                                    >
                                        Decline
                                    </div>
                                    <div
                                        className={`toggle-part approve ${isUpcoming === true ? 'active' : ''}`}
                                        onClick={() => setIsUpcoming(true)}
                                    >
                                        Approve
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div className="bike-details">
                        <img src={bikeImage} alt="Bike" className="bike-image" />
                        <p>Mechanify</p>
                        <p>Bike Name <span className="status in-progress">In Progress</span></p>
                        <p>Booking ID: 123 456 789</p>
                        <a href="tel:1234567890">
                            <img src={contactIcon} alt="Contact Service Centre" className="contact-icon" /> Contact Service Centre
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackService;
