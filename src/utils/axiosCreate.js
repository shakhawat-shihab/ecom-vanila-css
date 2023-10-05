import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/products",
  timeout: 500,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
