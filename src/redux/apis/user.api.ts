import baseApi from "../base_api/base.api";
import { USER_URL } from "../base_api/base.endpoints";
import { tagTypes } from "../tag-types";

const writerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    applyForWriter: build.mutation({
      query: (data) => ({
        url: `/${USER_URL}/apply-for-writer`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getUsersList: build.query({
      query: () => ({
        url: `/${USER_URL}/lists`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useApplyForWriterMutation, useGetUsersListQuery } = writerApi;
