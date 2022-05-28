import { store } from '@redux/store';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://192.168.0.30:3000',
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

http.interceptors.response.use((value) => {
  return value;
});
