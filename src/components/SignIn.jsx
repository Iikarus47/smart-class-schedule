import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // Simulate sign-up (replace with actual logic)
      const userData = { email }; // In a real app, include user data (id, roles, etc.)
      localStorage.setItem('user', JSON.stringify(userData)); // Store user info
      onSignUp(userData); // Pass user data to parent component
      navigate('/mentor'); // Redirect to MentorView after sign-up
    } else {
      setError('Please enter a valid email and password.');
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
