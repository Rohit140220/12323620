import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function DashboardLayout({ children, currentPage, setCurrentPage }) {
  const { auth, logout } = useContext(AuthContext);

  // Base navigation for everyone
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'crm', label: 'CRM List' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' }
  ];

  // If the user is the Owner (Admin), add the exclusive Admin tab
  if (auth.role === 'Admin') {
    navItems.push({ id: 'admin', label: 'Owner Panel' });
  }

  return (
    <div className="dashboard-layout">
      <header className="topbar">
        <div className="topbar-logo">
          <strong>CRM System</strong>
        </div>
        <nav className="topbar-nav">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="topbar-user">
          <span className="role-badge">{auth.role === 'Admin' ? 'Owner (Admin)' : 'User'}</span>
          <button onClick={logout} className="btn-logout">Logout</button>
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}