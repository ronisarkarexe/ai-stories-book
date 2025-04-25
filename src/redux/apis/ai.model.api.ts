import { IStories } from "../../components/stories/stories.view.component";
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
      transformResponse: (response: { data: IStories[]; message: string }) => {
        return { data: response.data, message: response.message };
      },
      invalidatesTags: [tagTypes.model],
    }),
    generateFreeModel: build.mutation({
      query: (data) => ({
        url: `/${AI_MODEL_URL}/generate-free-model`,
        method: "POST",
        data: data,
      }),
      transformResponse: (response: { data: IStories[]; message: string }) => {
        return { data: response.data, message: response.message };
      },
      invalidatesTags: [tagTypes.model],
    }),
  }),
});

export const { useGenerateModelMutation, useGenerateFreeModelMutation } =
  aiModelApi;
