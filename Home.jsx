import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Home() {
  const { auth } = useContext(AuthContext);

  // Get today's date formatted nicely
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="page-container">
      
      {/* Premium Welcome Banner */}
      <div className="welcome-banner">
        <h2>Welcome back, {auth.role === 'Admin' ? 'Owner' : 'Team Member'}! 👋</h2>
        <p>Here is what is happening with your CRM today — {today}.</p>
      </div>
      
      {/* Enhanced Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">$22,500</p>
          <p className="stat-subtitle"><span className="trend-up">↑ 12.5%</span> vs last month</p>
        </div>
        <div className="stat-card">
          <h3>Active Customers</h3>
          <p className="stat-value text-success">400</p>
          <p className="stat-subtitle"><span className="trend-up">↑ 5%</span> vs last month</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p className="stat-value text-warning">30</p>
          <p className="stat-subtitle"><span className="trend-down">↓ 2%</span> vs last month</p>
        </div>
        <div className="stat-card">
          <h3>Closed Deals</h3>
          <p className="stat-value text-purple">150</p>
          <p className="stat-subtitle"><span className="trend-up">↑ 8%</span> vs last month</p>
        </div>
      </div>

      {/* New Bottom Layout for Activity and Progress */}
      <div className="dashboard-widgets">
        
        {/* Recent Activity Feed */}
        <div className="widget-card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>
              <span>🎉 <strong>Acme Corp</strong> deal closed</span> 
              <span className="activity-time">2 hrs ago</span>
            </li>
            <li>
              <span>👤 <strong>Sarah Jenkins</strong> added a new lead</span> 
              <span className="activity-time">4 hrs ago</span>
            </li>
            <li>
              <span>✉️ Follow-up email sent to <strong>Global Tech</strong></span> 
              <span className="activity-time">5 hrs ago</span>
            </li>
            <li>
              <span>⚠️ <strong>System</strong> automated backup completed</span> 
              <span className="activity-time">1 day ago</span>
            </li>
          </ul>
        </div>

        {/* Monthly Targets Progress */}
        <div className="widget-card">
          <h3>Monthly Targets</h3>
          
          <div className="progress-wrapper">
            <div className="progress-label">
              <span>Revenue Goal ($30k)</span>
              <span>75%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="progress-wrapper">
            <div className="progress-label">
              <span>New Leads (50)</span>
              <span>90%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '90%', backgroundColor: '#2e7d32' }}></div>
            </div>
          </div>

          <div className="progress-wrapper">
            <div className="progress-label">
              <span>Customer Retention</span>
              <span>98%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '98%', backgroundColor: '#ba68c8' }}></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
