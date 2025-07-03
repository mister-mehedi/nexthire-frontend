// PURPOSE: Global state management for authentication using React Context.
// ===================================================================================
import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthService from '@/services/auth.service';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await AuthService.login(username, password);
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      setIsAuthenticated(true);
    }
    return response;
  };

  const register = async (username, email, password, role) => {
    return await AuthService.register(username, email, password, role);
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};