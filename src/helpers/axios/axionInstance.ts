import axios, { AxiosResponse } from "axios";
import { getFromLocalStorage } from "../../utils/local-storage";
import { AUTH_KEY } from "../../constants/storage-key";
import { IMeta, ResponseErrorType } from "../../types";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

export interface ApiResponseData<T = unknown> {
  data: T;
  meta?: IMeta | undefined;
}

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(AUTH_KEY);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponseData>) => {
    return response;
  },
  function (error) {
    const errorObject: ResponseErrorType = {
      statusCode: error.response?.data?.statusCode || 500,
      message: error.response?.data?.message || "Something went wrong!",
      errorMessages: error.response?.data?.errorMessages || [],
    };
    return Promise.reject(errorObject);
  }
);

export { instance };
