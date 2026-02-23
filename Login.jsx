import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // Default to Standard User
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Uses the role you selected in the dropdown
    const mockToken = `fake-jwt-token-for-${role}`;
    login(mockToken, role);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 style={{ textAlign: 'center', color: '#4a148c', marginBottom: '1.5rem' }}>
          CRM Login
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
          Enter any email and select your access level below.
        </p>

        <input 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ marginBottom: '1rem', padding: '0.8rem', border: '1px solid #ce93d8', borderRadius: '4px', width: '100%' }}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ marginBottom: '1rem', padding: '0.8rem', border: '1px solid #ce93d8', borderRadius: '4px', width: '100%' }}
        />

        {/* Dropdown to select role for testing */}
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={{ marginBottom: '1.5rem', padding: '0.8rem', border: '1px solid #ce93d8', borderRadius: '4px', width: '100%', backgroundColor: 'white', color: '#4a148c', fontWeight: 'bold' }}
        >
          <option value="User">Standard User</option>
          <option value="Admin">Owner (Admin)</option>
        </select>
        
        <button type="submit" className="btn-primary" style={{ padding: '0.8rem', backgroundColor: '#8e24aa', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}