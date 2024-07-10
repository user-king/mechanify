// src/pages/Booking.js
import React, { useState } from 'react';
import '../assets/styles/Booking.css';
import bikeImage from '../assets/images/bike.png';
import contactIcon from '../assets/images/contact.png';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [isUpcoming, setIsUpcoming] = useState(true);
  const navigate = useNavigate();

  const handleTrackServiceClick = () => {
    navigate('/track-service');
  };

  return (
    <div className="my-booking-page">
      <div className="upper-background"></div>
      <div className="lower-background"></div>
      <div className="my-booking-heading">Home</div>
      <div className="toggle-buttons">
        <div
          className={`toggle-button ${isUpcoming ? 'active' : ''}`}
          onClick={() => setIsUpcoming(true)} 
        >
          Upcoming Booking
        </div>
        <div
          className={`toggle-button ${!isUpcoming ? 'active' : ''}`}
          onClick={() => setIsUpcoming(false)}
        >
          Past Booking
        </div>
      </div>

      {isUpcoming ? (
        <div className="my-booking-container">
          <div className="booking-card">
            <div className="booking-details">
              <h2>Bike Name <span className="status confirmed">Confirmed</span></h2>
              <p>Booking ID: 123 456 789</p>
              <hr />
              <div className="garage-details">
                <p><strong>Garage Name</strong></p>
                <p>BTM, Bangalore, Karnataka 123...</p>
                <p><strong>Date:</strong> 21st May 2022, Monday</p>
                <p><strong>Timing:</strong> 9:00 - 10:00 AM</p>
                <a href="tel:1234567890">
                  <img src={contactIcon} alt="Contact Support" className="contact-icon" /> Contact Support
                </a>
              </div>
              <button className="track-service-button" onClick={handleTrackServiceClick}>Track Your Service</button>
            </div>
            <div className="divider"></div>
            <div className="pickup-details">
              <p><strong>Date:</strong> 21st May 2022, Monday</p>
              <p><strong>PickUp Time:</strong> 9:00 - 10:00 AM</p>
              <button className="update-button">Update</button>
            </div>
            <div className="divider"></div>
            <div className="bike-details">
              <img src={bikeImage} alt="Bike" className="bike-image" />
              <p><strong>Mechanify</strong></p>
              <p>Bike Name <span className="status in-progress">In Progress</span></p>
              <p>Booking ID: 123 456 789</p>
              <a href="tel:1234567890">
                <img src={contactIcon} alt="Contact Service Centre" className="contact-icon" /> Contact Service Centre
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-booking-container">
          <div className="booking-card">
            <div className="booking-details">
              <h2>Bike Name <span className="status completed">Completed</span></h2>
              <p>Booking ID: 987 654 321</p>
              <hr />
              <div className="garage-details">
                <p><strong>Garage Name</strong></p>
                <p>BTM, Bangalore, Karnataka 123...</p>
                <p><strong>Date:</strong> 15th April 2022, Friday</p>
                <p><strong>Timing:</strong> 10:00 - 11:00 AM</p>
                <a href="tel:1234567890">
                  <img src={contactIcon} alt="Contact Support" className="contact-icon" /> Contact Support
                </a>
              </div>
              <button className="track-service-button">View Details</button>
            </div>
            <div className="divider"></div>
            <div className="pickup-details">
              <p><strong>Date:</strong> 15th April 2022, Friday</p>
              <p><strong>PickUp Time:</strong> 10:00 - 11:00 AM</p>
              <button className="update-button">Update</button>
            </div>
            <div className="divider"></div>
            <div className="bike-details">
              <img src={bikeImage} alt="Bike" className="bike-image" />
              <p><strong>Mechanify</strong></p>
              <p>Bike Name <span className="status completed">Completed</span></p>
              <p>Booking ID: 987 654 321</p>
              <a href="tel:1234567890">
                <img src={contactIcon} alt="Contact Service Centre" className="contact-icon" /> Contact Service Centre
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
