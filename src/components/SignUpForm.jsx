import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add logic for form submission
    console.log({ name, email, password });
  };

  return (
    <div className="signup-container" style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Register to Activity Hub</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        <div style={{ margin: '1rem 0', fontWeight: 'bold' }}>or</div>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#4285F4', color: '#fff', border: 'none', borderRadius: '4px', marginBottom: '10px' }}>
          Sign up with Google
        </button>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#3b5998', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sign up with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
