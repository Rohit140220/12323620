import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Settings() {
  const { auth } = useContext(AuthContext);

  // --- Interactive States ---
  const [activeTab, setActiveTab] = useState('General');
  const [isSaving, setIsSaving] = useState(false);
  
  // Profile Form State
  const [profile, setProfile] = useState({
    name: auth.role === 'Admin' ? 'System Owner' : 'Alex Johnson',
    email: auth.role === 'Admin' ? 'admin@crm.com' : 'employee@crm.com',
    phone: '+1 (555) 123-4567',
    role: auth.role
  });

  // Toggles State
  const [toggles, setToggles] = useState({
    emailNotifs: true,
    smsNotifs: false,
    twoFactor: true,
    maintenanceMode: false,
    publicSignups: false
  });

  // --- Handlers ---
  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully!");
    }, 800);
  };

  const generateApiKey = () => {
    alert("New API Key Generated: CRM-LIVE-" + Math.random().toString(36).substr(2, 9).toUpperCase());
  };

  return (
    <div className="page-container">
      <div className="module-header">
        <div>
          <h2>Account Settings</h2>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>Manage your profile, security, and system preferences.</p>
        </div>
      </div>

      {/* Settings Layout: Sidebar Tabs + Content Area */}
      <div className="settings-layout">
        
        {/* Navigation Sidebar */}
        <div className="settings-sidebar">
          <div className="profile-summary">
            <div className="avatar-circle">
              {profile.name.charAt(0)}
            </div>
            <h3>{profile.name}</h3>
            <span className="role-badge">{profile.role}</span>
          </div>
          
          <nav className="settings-nav">
            <button className={`settings-tab ${activeTab === 'General' ? 'active' : ''}`} onClick={() => setActiveTab('General')}>
              👤 General Profile
            </button>
            <button className={`settings-tab ${activeTab === 'Security' ? 'active' : ''}`} onClick={() => setActiveTab('Security')}>
              🔒 Security & Login
            </button>
            {auth.role === 'Admin' && (
              <button className={`settings-tab ${activeTab === 'System' ? 'active' : ''}`} onClick={() => setActiveTab('System')}>
                ⚙️ System Config
              </button>
            )}
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="settings-content widget-card" style={{ margin: 0 }}>
          
          {/* GENERAL TAB */}
          {activeTab === 'General' && (
            <form onSubmit={handleSave} className="settings-form fade-in">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} required />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="text" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Account Role</label>
                  <input type="text" value={profile.role} disabled style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }} />
                </div>
              </div>

              <h3 style={{ marginTop: '2rem' }}>Notifications</h3>
              <div className="toggle-row">
                <div>
                  <strong>Email Notifications</strong>
                  <p className="toggle-desc">Receive daily summaries and activity alerts.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={toggles.emailNotifs} onChange={() => handleToggle('emailNotifs')} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="toggle-row">
                <div>
                  <strong>SMS Alerts</strong>
                  <p className="toggle-desc">Get text messages for urgent lead updates.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={toggles.smsNotifs} onChange={() => handleToggle('smsNotifs')} />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'Security' && (
            <div className="settings-form fade-in">
              <h3>Change Password</h3>
              <div className="form-grid" style={{ marginBottom: '2rem' }}>
                <div className="input-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="input-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
                <div className="input-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '0.8rem' }} onClick={handleSave}>
                    {isSaving ? 'Updating...' : 'Update Password'}
                  </button>
                </div>
              </div>

              <h3>Two-Factor Authentication (2FA)</h3>
              <div className="toggle-row">
                <div>
                  <strong>Require 2FA for Login</strong>
                  <p className="toggle-desc">Adds an extra layer of security using an authenticator app.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={toggles.twoFactor} onChange={() => handleToggle('twoFactor')} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          )}

          {/* SYSTEM CONFIG TAB (ADMIN ONLY) */}
          {activeTab === 'System' && auth.role === 'Admin' && (
            <div className="settings-form fade-in">
              <h3 style={{ color: '#c62828' }}>⚠️ Danger Zone: System Config</h3>
              
              <div className="toggle-row">
                <div>
                  <strong>Maintenance Mode</strong>
                  <p className="toggle-desc">Locks out all standard users. Only Owners can log in.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={toggles.maintenanceMode} onChange={() => handleToggle('maintenanceMode')} />
                  <span className="slider round warning"></span>
                </label>
              </div>

              <div className="toggle-row">
                <div>
                  <strong>Allow Public Employee Signups</strong>
                  <p className="toggle-desc">Allows anyone to create a 'Pending' account via the login screen.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={toggles.publicSignups} onChange={() => handleToggle('publicSignups')} />
                  <span className="slider round"></span>
                </label>
              </div>

              <h3 style={{ marginTop: '2rem' }}>Developer Integrations</h3>
              <div className="api-key-box">
                <p><strong>REST API Access Key</strong></p>
                <p className="toggle-desc" style={{ marginBottom: '1rem' }}>Use this key to connect external apps to this CRM.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" value="••••••••••••••••••••••••••••" disabled style={{ flex: 1, padding: '0.8rem', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px' }} />
                  <button className="btn-action download" onClick={generateApiKey} style={{ padding: '0 1.5rem', fontWeight: 'bold' }}>
                    Regenerate Key
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
