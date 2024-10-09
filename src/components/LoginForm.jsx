import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Login to Activity Hub</h2>
      <form onSubmit={handleSubmit}>
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
          <div style={{ textAlign: 'right', marginTop: '8px' }}>
            <a href="#" style={{ fontSize: '0.9rem' }}>Forgot your password?</a>
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={{ marginRight: '8px' }}
            />
            Remember me
          </label>
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
          Sign in
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <div style={{ margin: '1rem 0', fontWeight: 'bold' }}>or</div>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#4285F4', color: '#fff', border: 'none', borderRadius: '4px', marginBottom: '10px' }}>
          Sign in with Google
        </button>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#3b5998', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
