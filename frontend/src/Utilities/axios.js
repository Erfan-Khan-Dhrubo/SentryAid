import axios from "axios";

const api = axios.create({
  baseURL: "https://sentryaid-backend.onrender.com/api", // http://localhost:5001/api for deployment
});

export default api;
