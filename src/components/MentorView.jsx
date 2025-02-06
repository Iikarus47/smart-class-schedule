import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the calendar's CSS
import "./MentorView.css"; // Import the custom CSS file

function MentorView() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [mentorAvailability, setMentorAvailability] = useState(new Set());
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Load availability from localStorage on mount
  useEffect(() => {
    const storedAvailability = JSON.parse(localStorage.getItem("mentorAvailability"));
    if (storedAvailability) {
      setMentorAvailability(new Set(storedAvailability));
    }

    const storedSessions = JSON.parse(localStorage.getItem("sessions"));
    if (storedSessions) {
      setSessions(storedSessions);
    }
  }, []);

  // Save availability to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("mentorAvailability", JSON.stringify(Array.from(mentorAvailability)));
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [mentorAvailability, sessions]);

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle availability toggle
  const toggleAvailability = () => {
    const dateString = selectedDate.toDateString();
    const newAvailability = new Set(mentorAvailability);

    if (newAvailability.has(dateString)) {
      newAvailability.delete(dateString); // Remove if already marked as available
    } else {
      newAvailability.add(dateString); // Add if not marked
    }

    setMentorAvailability(newAvailability);
  };

  // Handle scheduling a new session
  const scheduleSession = () => {
    if (newSession.trim() !== "" && mentorAvailability.has(selectedDate.toDateString())) {
      const newSessionObj = { id: sessions.length + 1, session: newSession, date: selectedDate.toLocaleString() };
      setSessions([...sessions, newSessionObj]);
      setNewSession(""); // Reset session input
    }
  };

  // Function to apply custom classes to tiles (dates)
  const tileClassName = ({ date }) => {
    const dateString = date.toDateString();
    if (mentorAvailability.has(dateString)) {
      return 'available-date'; // Apply the 'available-date' class
    }
    return ''; // Default styling
  };

  // Convert the Set of available dates into an array for rendering
  const availableDates = Array.from(mentorAvailability);

  return (
    <div className="mentor-dashboard">
      <h2>Mentor Dashboard</h2>
      <p>View availability and schedule sessions.</p>

      {/* Mentor's Availability Calendar */}
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />

      {/* Availability Toggle */}
      <button
        onClick={toggleAvailability}
        className={`availability-btn ${mentorAvailability.has(selectedDate.toDateString()) ? "available" : ""}`}
      >
        {mentorAvailability.has(selectedDate.toDateString()) ? "Available for Sessions" : "Set Availability"}
      </button>

      {/* Schedule New Session */}
      <div className="schedule-session">
        <input
          type="text"
          value={newSession}
          onChange={(e) => setNewSession(e.target.value)}
          placeholder="Enter session details"
        />
        <button
          onClick={scheduleSession}
          disabled={!newSession.trim() || !mentorAvailability.has(selectedDate.toDateString())}
        >
          Schedule Session
        </button>
      </div>

      {/* Display Scheduled Sessions */}
      <div className="scheduled-sessions">
        <h3>Scheduled Sessions</h3>
        {sessions.length > 0 ? (
          <ul>
            {sessions.map((session) => (
              <li key={session.id}>
                <p>{session.session}</p>
                <p>Scheduled on: {session.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No scheduled sessions yet.</p>
        )}
      </div>

      {/* Display Available Dates */}
      <div className="available-dates">
        <h3>Your Available Dates</h3>
        {availableDates.length > 0 ? (
          <ul>
            {availableDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        ) : (
          <p>No available dates yet.</p>
        )}
      </div>
    </div>
  );
}

export default MentorView;
