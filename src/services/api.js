import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendjuntos.herokuapp.com/results',
  headers: { 'Access-Control-Allow-Origin': 'true' },
});

export default api;
