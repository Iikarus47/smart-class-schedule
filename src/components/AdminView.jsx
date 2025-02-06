import React, { useState } from "react";

function AdminView() {
  // State to toggle between course and assignment views
  const [view, setView] = useState("courses"); // 'courses' or 'assignments'

  // Example courses data
  const courses = [
    { id: 1, name: "Computer Science 101" },
    { id: 2, name: "Mathematics 101" },
    { id: 3, name: "Physics 101" },
  ];

  // Example assignments data
  const assignments = [
    { id: 1, title: "CS Assignment 1", courseId: 1 },
    { id: 2, title: "Math Assignment 1", courseId: 2 },
    { id: 3, title: "Physics Assignment 1", courseId: 3 },
  ];

  // Event handler to toggle view
  const toggleView = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="text-gray-600 mb-4">Manage courses and assignments.</p>

      {/* Buttons to switch between views */}
      <div className="mb-6 space-x-4">
        <button
          onClick={() => toggleView("courses")}
          className={`px-6 py-3 rounded-lg ${view === "courses" ? "bg-red-600 text-white" : "bg-red-500 text-white"}`}
        >
          Manage Courses
        </button>
        <button
          onClick={() => toggleView("assignments")}
          className={`px-6 py-3 rounded-lg ${view === "assignments" ? "bg-blue-600 text-white" : "bg-blue-500 text-white"}`}
        >
          Manage Assignments
        </button>
      </div>

      {/* Render course or assignment section based on view */}
      {view === "courses" ? (
        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">Courses List</h3>
          <ul className="space-y-4">
            {courses.map((course) => (
              <li
                key={course.id}
                className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                {course.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">Assignments List</h3>
          <ul className="space-y-4">
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                {assignment.title} - Course ID: {assignment.courseId}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminView;
