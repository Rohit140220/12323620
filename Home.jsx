import React from 'react';

export default function Home() {
  return (
    <div className="page-container">
      <h2>Dashboard Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">$22,500</p>
        </div>
        <div className="stat-card">
          <h3>Active Customers</h3>
          <p className="stat-value text-success">400</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p className="stat-value text-warning">300</p>
        </div>
        <div className="stat-card">
          <h3>Closed Deals</h3>
          <p className="stat-value text-purple">150</p>
        </div>
      </div>
    </div>
  );
}