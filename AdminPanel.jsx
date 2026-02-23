import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export default function AdminPanel() {
  const { auth } = useContext(AuthContext);
  
  // Mock data representing system users
  const [users, setUsers] = useState([
    { id: 1, email: 'admin@crm.com', role: 'Admin (Owner)', status: 'Active' },
    { id: 2, email: 'employee@crm.com', role: 'User', status: 'Active' },
    { id: 3, email: 'sales@crm.com', role: 'User', status: 'Active' }
  ]);

  // Extra security check just in case
  if (auth.role !== 'Admin') {
    return (
      <div className="page-container">
        <h2>Access Denied</h2>
        <p>Only the System Owner can view this page.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="module-header">
        <h2>Admin Panel (Owner Dashboard)</h2>
        <button className="btn-primary">Create New User</button>
      </div>
      
      <p style={{ marginBottom: '1.5rem', color: '#6a1b9a' }}>
        <strong>Welcome, Owner.</strong> Here you can manage employee access and system-wide permissions.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email Account</th>
            <th>Role Level</th>
            <th>Account Status</th>
            <th>Management</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td><strong>{u.role}</strong></td>
              <td><span className="status active">{u.status}</span></td>
              <td>
                {u.role === 'Admin (Owner)' ? (
                  <span style={{ color: '#8e24aa', fontWeight: 'bold' }}>Owner Account</span>
                ) : (
                  <button className="btn-delete">Revoke Access</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}