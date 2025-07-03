// PURPOSE: Defines the application's routes and protects the dashboard. 
// Uses the new Toaster from Sonner.
// (Main Router and Layout)
// ===================================================================================
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import ProtectedRoute from '@/router/ProtectedRoute';
import { Toaster } from "@/components/ui/sonner"; // **UPDATED** to use Sonner

function AppLayout() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans">
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
      </Routes>
      <Toaster richColors />
    </div>
  );
}

export default AppLayout;