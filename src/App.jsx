// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MemberView from "./components/MemberView";
import MentorView from "./components/MentorView";
import AdminView from "./components/AdminView";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState(null);

  // Check if the user is already authenticated
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Protected route for Mentor and Admin, only accessible if user is authenticated
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/signin" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
      <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
      
      {/* Protect the MentorView route */}
      <Route path="/mentor" element={<ProtectedRoute element={<MentorView />} />} />
      
      {/* You can add more routes as needed */}
      <Route path="/member" element={<MemberView />} />
      <Route path="/admin" element={<ProtectedRoute element={<AdminView />} />} />
      
      {/* If the user is already signed in, navigate to the mentor view */}
      {user && <Navigate to="/mentor" />}
    </Routes>
  );
}

export default App;
