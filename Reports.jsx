import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Reports() {
  const { auth } = useContext(AuthContext);

  // Initial mock reports data
  const [reports, setReports] = useState([
    { id: 101, name: 'Q1 Sales Performance', category: 'Sales', date: '2026-02-20', size: '2.4 MB' },
    { id: 102, name: 'User Activity Log', category: 'System', date: '2026-02-22', size: '1.1 MB' },
    { id: 103, name: 'Customer Churn Analysis', category: 'Analytics', date: '2026-02-23', size: '3.8 MB' },
    { id: 104, name: 'Weekly Revenue Forecast', category: 'Sales', date: '2026-02-24', size: '1.5 MB' },
  ]);

  // Interactive States
  const [activeTab, setActiveTab] = useState('All');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  // --- Handlers ---
  const handleGenerateReport = () => {
    setIsGenerating(true);
    setProgress(0);

    // Simulate a loading progress bar
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          
          // Add the newly generated report to the top of the list
          const newReport = {
            id: Math.floor(Math.random() * 1000) + 200,
            name: `Custom ${activeTab === 'All' ? 'System' : activeTab} Report`,
            category: activeTab === 'All' ? 'System' : activeTab,
            date: new Date().toISOString().split('T')[0],
            size: '1.8 MB'
          };
          setReports(prev => [newReport, ...prev]);
          return 100;
        }
        return oldProgress + 20;
      });
    }, 400); // Progress updates every 400ms
  };

  const handleDownload = (name) => {
    alert(`Downloading: ${name}...`);
  };

  const handleDelete = (id) => {
    if (auth.role !== 'Admin') {
      alert("Only the Owner (Admin) can delete archived reports.");
      return;
    }
    if(window.confirm("Permanently delete this report?")) {
      setReports(reports.filter(r => r.id !== id));
    }
  };

  // --- Derived Data ---
  const filteredReports = activeTab === 'All' 
    ? reports 
    : reports.filter(r => r.category === activeTab);

  return (
    <div className="page-container">
      <div className="module-header">
        <div>
          <h2>System Reports & Analytics</h2>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>Generate, view, and export your CRM data.</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={handleGenerateReport}
          disabled={isGenerating}
          style={{ opacity: isGenerating ? 0.7 : 1, cursor: isGenerating ? 'not-allowed' : 'pointer' }}
        >
          {isGenerating ? 'Generating...' : '+ Generate New Report'}
        </button>
      </div>

      {/* Simulated Progress Bar */}
      {isGenerating && (
        <div className="generator-card">
          <p style={{ marginBottom: '0.5rem', color: '#4a148c', fontWeight: 'bold' }}>
            Compiling data... {progress}%
          </p>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {/* Interactive Tabs */}
      <div className="report-tabs">
        {['All', 'Sales', 'Analytics', 'System'].map(tab => (
          <button 
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reports Table */}
      <div className="widget-card" style={{ borderTop: 'none', padding: 0, overflow: 'hidden' }}>
        <table className="data-table" style={{ margin: 0, boxShadow: 'none' }}>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Category</th>
              <th>Date Generated</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map(report => (
                <tr key={report.id}>
                  <td><strong>📄 {report.name}</strong></td>
                  <td>
                    <span className={`status ${report.category.toLowerCase()}`}>
                      {report.category}
                    </span>
                  </td>
                  <td>{report.date}</td>
                  <td>{report.size}</td>
                  <td>
                    <button className="btn-action download" onClick={() => handleDownload(report.name)}>
                      ⬇️ Download
                    </button>
                    {auth.role === 'Admin' && (
                      <button className="btn-action delete" onClick={() => handleDelete(report.id)}>
                        🗑️
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                  No reports found in the <strong>{activeTab}</strong> category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
