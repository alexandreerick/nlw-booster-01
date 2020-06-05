import axios from 'axios';

const api = axios.create({
  baseURL: 'http://110.76.220.29:3333'
});

export default api;