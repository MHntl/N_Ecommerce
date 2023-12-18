import axios from 'axios';
import {BASE_URL} from './urls';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
//HTTP isteklerinde bir header kısmı olur. Genelde sabittir.
Client.defaults.headers = {
  'Content-Type': `application/json`,
  Accept: `application/json`,
};

//!Interceptors
//İnterseptörler, bir isteğin gönderilmeden önce veya bir yanıtın işlenmeden önce çalışan fonksiyonlardır.
//Bu, isteği değiştirmek, özel başlıklar eklemek, hataları işlemek veya yanıtları ön işlemek gibi işlemleri gerçekleştirmenizi sağlar.
// Add a request interceptor
Client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export {Client};
