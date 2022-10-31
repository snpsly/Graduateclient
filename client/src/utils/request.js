import axios from 'axios';
const service = axios.create({
  baseURL: 'http://10.0.2.2:3000/',
  timeout: 5000,
});

export default service;
