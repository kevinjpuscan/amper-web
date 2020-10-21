import axios from "axios";
const baseURL = "http://192.168.100.15:3001/api/";

const getToken = () => {
  return null;
};

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
