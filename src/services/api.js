// PURPOSE: Centralized Axios instance for API calls.
// ===================================================================================
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      config.headers['Authorization'] = 'Bearer ' + user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
