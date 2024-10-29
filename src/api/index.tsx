import axios from 'axios';
import config from '../config';

export default axios.create({
  baseURL: config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});
