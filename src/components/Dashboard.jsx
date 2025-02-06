// src/components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Smart Class Scheduling System</h1>
      <nav className="space-y-6 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link
              to="/member"
              className="block px-6 py-4 text-xl bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Member Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/mentor"
              className="block px-6 py-4 text-xl bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Mentor Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="block px-6 py-4 text-xl bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Admin Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
