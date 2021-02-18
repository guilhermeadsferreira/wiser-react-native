import axios from "axios";

const api = axios.create({
  baseURL: "https://602dcadc96eaad00176dcc7e.mockapi.io",
});

export default api;
