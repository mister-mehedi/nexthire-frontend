// PURPOSE: The container page for the login functionality.
// ===================================================================================
import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      console.error("Login error:", errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wider">NextHire</h1>
        <p className="text-gray-500 mt-2">Your next career step starts here.</p>
      </header>
      <main className="bg-white rounded-2xl shadow-2xl p-8">
        <LoginForm onLogin={handleLogin} />
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <button onClick={() => navigate('/register')} className="font-semibold text-blue-600 hover:text-blue-800">
            Sign Up
          </button>
        </p>
      </main>
    </div>
  );
};

export default LoginPage;