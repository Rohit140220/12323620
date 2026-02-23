import React, { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import Login from './Login';
import DashboardLayout from './DashboardLayout';
import Home from './Home';
import CrmList from './CrmList';
import Reports from './Reports';
import Settings from './Settings';
import AdminPanel from './AdminPanel';
import './App.css';

const MainApp = () => {
  const { auth } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState('home');

  if (!auth.token) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'crm': return <CrmList />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings />;
      case 'admin': return <AdminPanel />; // Added Owner Route
      default: return <Home />;
    }
  };

  return (
    <DashboardLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}