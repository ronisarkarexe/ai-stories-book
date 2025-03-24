import { Post } from "../../models/post";
import { IMeta } from "../../types";
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
      invalidatesTags: [tagTypes.post, tagTypes.user],
    }),
    getPostLists: build.query({
      query: (arg: Record<string, string | number>) => ({
        url: `/${POST_URL}/lists`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: {
        data: Post[];
        meta: IMeta;
        message: string;
      }) => {
        return {
          posts: response.data,
          meta: response.meta,
          message: response.message,
        };
      },
      providesTags: [tagTypes.post],
    }),
    getLatestLists: build.query({
      query: () => ({
        url: `/${POST_URL}/latest-lists`,
        method: "GET",
      }),
      transformResponse: (response: {
        data: Post[];
        meta: IMeta;
        message: string;
      }) => {
        return {
          posts: response.data,
          meta: response.meta,
          message: response.message,
        };
      },
      providesTags: [tagTypes.post],
    }),
    getFeaturedLists: build.query({
      query: () => ({
        url: `/${POST_URL}/feature-lists`,
        method: "GET",
      }),
      transformResponse: (response: {
        data: Post[];
        meta: IMeta;
        message: string;
      }) => {
        return {
          posts: response.data,
          meta: response.meta,
          message: response.message,
        };
      },
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
