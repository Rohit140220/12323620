import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function CrmList() {
  const { auth } = useContext(AuthContext);
  
  // Initial richer mock data
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Acme Corp', contact: 'john@acme.com', value: '$12,000', status: 'Active' },
    { id: 2, name: 'Global Tech', contact: 'sarah@global.com', value: '$8,500', status: 'Pending' },
    { id: 3, name: 'Stark Industries', contact: 'tony@stark.com', value: '$45,000', status: 'Active' },
    { id: 4, name: 'Wayne Enterprises', contact: 'bruce@wayne.com', value: '$30,000', status: 'Closed' }
  ]);

  // Interactive States
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', contact: '', value: '', status: 'Pending' });

  // --- Handlers ---
  const handleDelete = (id) => {
    if (auth.role !== 'Admin') {
      alert("Only the Owner (Admin) can delete records.");
      return;
    }
    if(window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  const handleEdit = (customer) => {
    setFormData(customer);
    setEditingId(customer.id);
    setShowForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update existing
      setCustomers(customers.map(c => c.id === editingId ? { ...formData, id: editingId } : c));
    } else {
      // Create new (mock ID generation)
      const newId = customers.length ? Math.max(...customers.map(c => c.id)) + 1 : 1;
      setCustomers([...customers, { ...formData, id: newId }]);
    }
    // Reset form
    setFormData({ name: '', contact: '', value: '', status: 'Pending' });
    setEditingId(null);
    setShowForm(false);
  };

  // --- Derived Data for UI ---
  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      <div className="module-header">
        <h2>Customer Records</h2>
        <button 
          className="btn-primary" 
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ name: '', contact: '', value: '', status: 'Pending' });
          }}
        >
          {showForm ? 'Cancel' : '+ Add New Customer'}
        </button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="form-card">
          <h3>{editingId ? 'Edit Customer' : 'Add New Customer'}</h3>
          <form onSubmit={handleSave} className="inline-form">
            <input 
              type="text" placeholder="Company Name" required 
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              type="email" placeholder="Contact Email" required 
              value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} 
            />
            <input 
              type="text" placeholder="Deal Value (e.g. $5,000)" required 
              value={formData.value} onChange={e => setFormData({...formData, value: e.target.value})} 
            />
            <select 
              value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="btn-primary">Save Record</button>
          </form>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="Search by name or email..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="status-filter"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active Only</option>
          <option value="Pending">Pending Only</option>
          <option value="Closed">Closed Only</option>
        </select>
      </div>

      {/* Data Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Deal Value</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td><strong>{c.name}</strong></td>
                <td>{c.contact}</td>
                <td>{c.value}</td>
                <td><span className={`status ${c.status.toLowerCase()}`}>{c.status}</span></td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(c)}>Edit</button>
                  {auth.role === 'Admin' && (
                    <button className="btn-delete" onClick={() => handleDelete(c.id)}>Delete</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                No customers found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
