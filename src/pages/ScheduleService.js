import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/styles/ScheduleService.css';

const ScheduleService = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [voiceInput, setVoiceInput] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate('/offers');
  };

  useEffect(() => {
    console.log("selected date ", selectedDate);
  }, [selectedDate]);

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log('Voice recognition started. Speak now.');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
    };

    recognition.onend = () => {
      console.log('Voice recognition ended.');
    };

    recognition.start();
  };

  const getFormattedDate = (date) => {
    const options = { day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const getDateLabel = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const generateWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };

  const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const currentTime = new Date();
    let startHour = 8; // Default start time is 8:00 AM

    if (selectedDate.toDateString() === currentTime.toDateString()) {
      startHour = currentTime.getHours() + 1;
    }

    const endHour = 20;

    for (let hour = startHour; hour < endHour; hour++) {
      const start = `${hour % 12 || 12}:00 - ${hour % 12 + 1 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
      slots.push(start);
    }

    return slots;
  };

  const timeSlots = generateTimeSlots(selectedDate);

  return (
    <div className="schedule-service">
      <button className="back-button" onClick={navigateBack}>&larr;</button>
      <div className="content">
        <div className="left-section">
          <h1 className="title">When Do you want to Schedule Your Vehicle Service?</h1>
          <div className="date-selection">
            {generateWeekDates().map((date, index) => (
              <div
                key={index}
                className={`date-option ${selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedDate(date);
                  setShowDatePicker(false);
                }}
              >
                <p>{getDateLabel(date)}</p>
                <span>{getFormattedDate(date)}</span>
              </div>
            ))}
            <div
              className={`date-option ${showDatePicker ? 'selected' : ''}`}
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <p>Calendar</p>
              <span>&#128197;</span>
            </div>
          </div>
          {showDatePicker && (
            <div className="calendar-selection">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                className="date-picker"
              />
            </div>
          )}
          <div className="time-selection">
            {timeSlots.map((time, index) => (
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
            <div className="issue-button" onClick={handleVoiceInput}>Give voice instructions</div>
            <select className="issue-button">
              <option value="">Choose Vehicle</option>
              <option value="bike">Bike</option>
              <option value="scooter">Scooter</option>
            </select>

            <textarea
              className="issue-input"
              placeholder="Type your problem here"
              value={voiceInput}
              onChange={(e) => setVoiceInput(e.target.value)}
            ></textarea>
            <button className="next-button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleService;
