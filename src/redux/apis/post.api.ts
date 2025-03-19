import baseApi from "../base_api/base.api";
import { POST_URL } from "../base_api/base.endpoints";
import { tagTypes } from "../tag-types";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation({
      query: (data) => ({
        url: `/${POST_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.post],
    }),
    getPostLists: build.query({
      query: () => ({
        url: `/${POST_URL}/lists`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),
    getLatestLists: build.query({
      query: () => ({
        url: `/${POST_URL}/latest-lists`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),
    getFeaturedLists: build.query({
      query: () => ({
        url: `/${POST_URL}/feature-lists`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostListsQuery,
  useGetLatestListsQuery,
  useGetFeaturedListsQuery,
} = postApi;
