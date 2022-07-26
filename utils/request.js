import axios from "axios";

const baseURL = "";
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

const request = (url, method, data) => {
  return instance({
    url,
    method,
    [method.toLowerCase() == "get" ? "params" : "data"]: data,
  });
};

export default request;
