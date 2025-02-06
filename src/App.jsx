// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MemberView from "./components/MemberView";
import MentorView from "./components/MentorView";
import AdminView from "./components/AdminView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/member" element={<MemberView />} />
      <Route path="/mentor" element={<MentorView />} />
      <Route path="/admin" element={<AdminView />} />
    </Routes>
  );
}

export default App;
