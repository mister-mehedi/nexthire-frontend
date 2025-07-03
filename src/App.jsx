// PURPOSE: Defines the application's routes and protects the dashboard.
// (Main Router and Layout)
// ===================================================================================
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './router/ProtectedRoute';

function AppLayout() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default AppLayout;