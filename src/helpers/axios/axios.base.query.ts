import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig } from "axios";
import { instance as AxiosInstance } from "./axionInstance";
import { IMeta, ResponseErrorType } from "../../types";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await AxiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
      });
      return {
        data: result.data,
        meta: result.data.meta,
        message: result.data.message,
      };
    } catch (axiosError) {
      const err = axiosError as ResponseErrorType;
      return {
        error: {
          status: err.statusCode,
          data: err.errorMessages || [{ path: "", message: err.message }],
        },
      };
    }
  };

export default axiosBaseQuery;
