// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true, // VERY important for cookie-based auth
});

export default api;