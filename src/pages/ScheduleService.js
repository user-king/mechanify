import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../assets/styles/ScheduleService.css';

const ScheduleService = () => {
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedTime, setSelectedTime] = useState('8:00 - 9:00am');
  const dates = ['today', 'tomorrow', 'day after', 'next week', 'calendar'];
  const times = [
    '8:00 - 9:00am', '10:00 - 11:00am', '1:00 - 2:00pm', 
    '3:00 - 4:00pm', '5:00 - 6:00pm', '7:00 - 8:00pm'
  ];

  const navigate = useNavigate(); // Hook to navigate to other pages

  const navigateBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const handleNextClick = () => {
    // Logic to handle next button click, e.g., navigate to confirmation page
    // Example: navigate('/confirm-booking', { state: { selectedDate, selectedTime } });
  };

  return (
    <div className="schedule-service">
        <button className="back-button" onClick={navigateBack}>&larr;</button>
      <div className="content">
        <div className="left-section">
          <h1 className="title">When Do you want to Schedule Your Vehicle Service?</h1>
          <div className="date-selection">
            {dates.map((date, index) => (
              <div
                key={index}
                className={`date-option ${selectedDate === date ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                <p>{date}</p>
                <span>21</span>
              </div>
            ))}
          </div>
          <div className="time-selection">
            {times.map((time, index) => (
              <button
                key={index}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="right-section">
          <h2>Any other issues?</h2>
          <div className="issues">
            <button className="issue-button">Give voice instructions</button>
            <button className="issue-button">Commonly Faced Problems</button>
          </div>
          <textarea className="issue-input" placeholder="Type your problem here"></textarea>
          <button className="next-button" onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleService;
