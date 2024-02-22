import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://admin.almetbaku.az/api/',
  headers: { 'Accept-Language': 'az' }
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['Accept-Language'] = localStorage.getItem('lang') || 'en';
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lies within the range of 2xx causes this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that fall outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
