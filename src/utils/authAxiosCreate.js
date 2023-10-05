import axios from "axios";
const axiosInstanceAuth = axios.create({
  baseURL: "http://localhost:8000/auth",
  timeout: 500,
});
axiosInstanceAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstanceAuth;
