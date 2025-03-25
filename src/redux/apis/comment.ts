import { CommentResponse } from "../../models/comment";
import baseApi from "../base_api/base.api";
import { COMMENT_URL } from "../base_api/base.endpoints";
import { tagTypes } from "../tag-types";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createComment: build.mutation({
      query: (data) => ({
        url: `/${COMMENT_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.post, tagTypes.comment],
    }),
    getCommentsList: build.query({
      query: (postId: string) => ({
        url: `/${COMMENT_URL}/get-comments/postId=${postId}`,
        method: "GET",
      }),
      transformResponse: (response: {
        data: CommentResponse;
        message: string;
      }) => response.data,
      providesTags: [tagTypes.post, tagTypes.comment],
    }),
  }),
});

export const { useCreateCommentMutation, useGetCommentsListQuery } = userApi;
