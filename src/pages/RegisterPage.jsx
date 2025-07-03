// PURPOSE: The container page for the registration functionality.
// ===================================================================================
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (username, email, password) => {
    try {
      const response = await register(username, email, password);
      // After successful registration, you might want to automatically log them in
      // or just show a success message and let them log in manually.
      // For now, we'll show a success message and redirect to login.
      console.log('Registration successful:', response.data.message);
      return { success: true, message: response.data.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      console.error("Registration error:", errorMessage);
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
        <RegisterForm onRegister={handleRegister} />
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="font-semibold text-green-600 hover:text-green-800">
            Sign In
          </button>
        </p>
      </main>
    </div>
  );
};

export default RegisterPage;