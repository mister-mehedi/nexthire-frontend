// PURPOSE: The container page for the login functionality.
// Uses Sonner for toast notifications.
// ===================================================================================
import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      toast.success("Login Successful", {
        description: "Welcome back! Redirecting to your dashboard.",
      });
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error("Login Failed", {
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;