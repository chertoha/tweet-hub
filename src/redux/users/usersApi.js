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
    baseUrl: process.env.REACT_APP_BASE_API_URL,
  }),

  tagTypes: ["Users", "Favorites"],

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

    getFavorites: builder.query({
      query: () => ({
        url: `/favorites`,
      }),

      providesTags: ["Favorites"],
    }),

    updateFavorites: builder.mutation({
      query: ({ id, method, body }) => {
        if (method !== "POST" && method !== "DELETE") {
          throw new Error("Endpoint method must be POST or DELETE");
        }
        return {
          url: method === "POST" ? `/favorites` : `/favorites/${id}`,
          method,
          data: body,
        };
      },
      invalidatesTags: ["Favorites", "Users"],
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useLazyGetUsersQuery,
  useLazyGetFavoritesQuery,
  useGetFavoritesQuery,
  useUpdateFavoritesMutation,
} = usersApi;
