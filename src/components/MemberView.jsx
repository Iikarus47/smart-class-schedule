import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the calendar's default CSS
import "./MemberView.css"; // Import custom CSS

function MemberView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availability, setAvailability] = useState(new Set());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleAvailability = () => {
    const dateString = selectedDate.toDateString();
    const newAvailability = new Set(availability);

    if (newAvailability.has(dateString)) {
      newAvailability.delete(dateString); 
    } else {
      newAvailability.add(dateString); 
    }

    setAvailability(newAvailability);
  };

  const isAvailable = availability.has(selectedDate.toDateString());

  const tileClassName = ({ date }) => {
    const dateString = date.toDateString();
    if (availability.has(dateString)) {
      return "available-date"; // Apply the "available-date" class
    }
    return ""; 
  };

  return (
    <div className="member-dashboard">
      <h2 className="header">Member Dashboard</h2>
      <p className="sub-header">Mark your availability here.</p>

      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        className="calendar"
      />

      <button
        onClick={toggleAvailability}
        className={`availability-btn ${isAvailable ? "available" : ""}`}
      >
        {isAvailable ? "Available" : "Mark Available"}
      </button>

      <div className="availability-list">
        <h3>Your Availability</h3>
        {availability.size > 0 ? (
          <ul>
            {Array.from(availability).map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        ) : (
          <p>No availability marked yet.</p>
        )}
      </div>
    </div>
  );
}

export default MemberView;
