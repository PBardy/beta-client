import { store } from '@redux/store';
import axios from 'axios';

export let http = axios.create({
  baseURL: 'http://192.168.0.30:3000',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${store.getState().auth.token}`,
  },
  validateStatus: () => true,
});

http.interceptors.request.use((value) => {
  const token = store.getState().auth.token;
  if (token && value.headers) {
    value.headers['Authorization'] = `Bearer ${store.getState().auth.token}`;
  }

  return value;
});

http.interceptors.response.use((value) => {
  return value;
});
