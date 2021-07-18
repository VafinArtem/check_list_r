import axios from "axios";

const BACKEND_URL = `http://localhost:3001/api`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SUCCES: 200,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    // withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {
      response: {
        status,
        // config: { method, url },
      },
    } = err;

    if (status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    if (status === HttpCode.NOT_FOUND) {
      throw status;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
