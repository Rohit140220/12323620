import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Settings() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="page-container">
      <h2>Settings</h2>
      <p>Current logged in role: <strong>{auth.role}</strong></p>
    </div>
  );
}