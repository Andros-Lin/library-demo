import Axios from "axios";

const createAxios = () => {
  return Axios.create({
    baseURL: process.env.BASE_URL || ""
  });
};

const axios = createAxios();

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
