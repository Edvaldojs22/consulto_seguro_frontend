import axios from "axios";
import { getToken } from "./authService";

const API_BASE_URL = "http://localhost:8080/api";
const api = axios.create({
  baseURL: API_BASE_URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

