import axios from "axios";

const axiosPrivet = axios.create({
  // production server
  // baseURL: "https://todo-time-block.herokuapp.com/",

  // development server
  baseURL: "http://localhost:5000/",

  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

axiosPrivet.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivet.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosPrivet;
