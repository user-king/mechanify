import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/styles/ScheduleService.css';

const ScheduleService = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('8:00 - 9:00am');
  const dates = ['today', 'tomorrow', 'day after', 'next week', 'calendar'];
  const times = [
    '8:00 - 9:00am', '10:00 - 11:00am', '1:00 - 2:00pm',
    '3:00 - 4:00pm', '5:00 - 6:00pm', '7:00 - 8:00pm'
  ];

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate('/offers');
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
                onClick={() => {
                  if (date !== 'calendar') {
                    setSelectedDate(date);
                  }
                }}
              >
                <p>{date}</p>
                <span>21</span>
              </div>
            ))}
          </div>
          <div className="calendar-selection">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="date-picker"
            />
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
            <div className="issue-button">Give voice instructions</div>
            <div className="issue-button">Commonly Faced Problems</div>
            <textarea className="issue-input" placeholder="Type your problem here"></textarea>
            <button className="next-button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleService;
