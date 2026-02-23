import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function CrmList() {
  const { auth } = useContext(AuthContext);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers([
      { id: 1, name: 'Acme Corp', contact: 'john@acme.com', status: 'Active' },
      { id: 2, name: 'Global Tech', contact: 'sarah@global.com', status: 'Pending' }
    ]);
  }, []);

  const handleDelete = (id) => {
    if (auth.role !== 'Admin') {
      alert("Only Admins can delete records.");
      return;
    }
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div className="page-container">
      <div className="module-header">
        <h2>Customer Records</h2>
        <button className="btn-primary">Add New Customer</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.contact}</td>
              <td><span className={`status ${c.status.toLowerCase()}`}>{c.status}</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                {auth.role === 'Admin' && (
                  <button className="btn-delete" onClick={() => handleDelete(c.id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}