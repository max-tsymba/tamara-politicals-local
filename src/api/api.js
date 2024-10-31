import axios from 'axios';

const api = axios.create({
  baseURL: 'http://154.12.228.214:8011/api/',
});

api.interceptors.request.use(
  (config) => {
    const token = null;
    if (!token) return config;
    if (config?.headers) {
      config.headers = { Authorization: `Bearer ${token}` };
      return config;
    }
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
