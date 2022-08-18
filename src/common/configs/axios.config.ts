import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

Axios.interceptors.response.use(
  (response) => {
    if (response?.status < 300) return response;
    return Promise.reject('An error occurred.');
  },
  (error) => {
    const response = error && error.response;

    if (error?.config.url)
      if (response) {
        // Request made and server responded
        // notificationHelper.errorNotification(response?.data);

        return Promise.reject(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return Promise.reject(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
        return Promise.reject(error.message);
      }
  }
);
