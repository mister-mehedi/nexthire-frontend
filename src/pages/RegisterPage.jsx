// PURPOSE: The container page for the registration functionality.
// Uses Sonner for toast notifications.
// ===================================================================================
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '@/components/RegisterForm';
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (username, email, password, role) => {
    try {
      const response = await register(username, email, password, role);
      toast.success("Registration Successful!", {
        description: response.data.message + " Redirecting to login...",
      });
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      toast.error("Registration Failed", {
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;