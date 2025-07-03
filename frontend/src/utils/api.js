// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-c0zf.onrender.com',
  withCredentials: true, // VERY important for cookie-based auth
});

export default api;
