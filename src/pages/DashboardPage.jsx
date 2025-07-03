// PURPOSE: A placeholder page for authenticated users.
// ===================================================================================
import React from 'react';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-10 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard!</h1>
        <p className="mt-4 text-lg text-gray-600">
          You are logged in as <span className="font-semibold text-blue-600">{user?.username}</span>.
        </p>
        <p className="mt-2 text-md text-gray-500">
          Email: {user?.email}
        </p>
        <div className="mt-4 text-md text-gray-500">
          Roles: {user?.roles?.join(', ')}
        </div>
        <button
          onClick={logout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;