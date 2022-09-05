import axios from "axios";

const api = axios.create({
  baseURL: "https://thecost.herokuapp.com",
});

export default api;
