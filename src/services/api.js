import axios from 'axios';

// baseURL: 'https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json', Online API
const api = axios.create({
  baseURL: 'http://localhost:3001/results',
  headers: { 'Access-Control-Allow-Origin': 'true' },
});

export default api;
