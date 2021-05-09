import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.brasil.io/v1/dataset/covid19',
  headers: { Authorization: 'Token 8496b6e858f02b7b757c10b1f401356d0cb9cf5d' },
});

export default api;
