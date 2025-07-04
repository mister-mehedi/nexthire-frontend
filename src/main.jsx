// PURPOSE: Initializes the app, router, and global authentication state.
// project entry point
// ===================================================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This now contains Tailwind and Shadcn styles
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
