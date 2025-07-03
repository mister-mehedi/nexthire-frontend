// PURPOSE: Contains all authentication-related API functions.
// ===================================================================================
import api from './api';

const login = (username, password) => {
  return api.post("/auth/signin", { username, password });
};

const register = (username, email, password, role) => {
  return api.post("/auth/signup", { username, email, password, role: [role] });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    return null;
  }
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default AuthService;