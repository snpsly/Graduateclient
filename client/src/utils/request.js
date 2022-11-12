import axios from 'axios';
const service = axios.create({
  baseURL: 'http://10.0.2.2:8080/',
  timeout: 50000,
});

export default service;
