import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/products",
  timeout: 500,
});

export default axiosInstance;
