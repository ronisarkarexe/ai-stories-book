import { AccessToken } from "../../models/login";
import baseApi from "../base_api/base.api";
import { AUTH_URL } from "../base_api/base.endpoints";
import { tagTypes } from "../tag-types";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url: `/${AUTH_URL}/login`,
        method: "POST",
        data: data,
      }),
      transformResponse: (response: { data: AccessToken }) => {
        return { data: response.data };
      },
      invalidatesTags: [tagTypes.user],
    }),
    registerUser: build.mutation({
      query: (data) => ({
        url: `/${AUTH_URL}/register`,
        method: "POST",
        data: data,
      }),
      transformResponse: (response: { data: AccessToken }) => {
        return { data: response.data };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
