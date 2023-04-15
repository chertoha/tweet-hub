import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const usersApi = createApi({
  reducerPath: "users",

  baseQuery: axiosBaseQuery({
    baseUrl: "https://64382579c1565cdd4d675499.mockapi.io/api",
  }),

  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit, isFollowing }) => ({
        url: `/users`,
        params: {
          page,
          limit,
          isFollowing,
        },
      }),

      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUpdateUserMutation, useLazyGetUsersQuery } = usersApi;
