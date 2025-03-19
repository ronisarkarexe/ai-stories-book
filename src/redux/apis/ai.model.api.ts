import baseApi from "../base_api/base.api";
import { AI_MODEL_URL } from "../base_api/base.endpoints";
import { tagTypes } from "../tag-types";

const aiModelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    generateModel: build.mutation({
      query: (data) => ({
        url: `/${AI_MODEL_URL}/generate-model`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.model],
    }),
    generateFreeModel: build.mutation({
      query: (data) => ({
        url: `/${AI_MODEL_URL}/generate-free-model`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.model],
    }),
  }),
});

export const { useGenerateModelMutation, useGenerateFreeModelMutation } =
  aiModelApi;
