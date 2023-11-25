import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";

export const kidsApi = createApi({
  reducerPath: "kidsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    timeout: 15000,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Accept', 'application/json');
      headers.set('Cache-Control', 'no-cache');
      headers.set('Pragma', 'no-cache');
      headers.set('Expires', '0');
      const token = getState().parent.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ["Kids"],
  endpoints: (builder) => ({
    // get all kids
    fetchKids: builder.query({
      query: () => "/kids/",
      providesTags: ["Kids"],
    }),

    // get kid by id
    fetchKid: builder.query({
      query: (id) => `/kids/kid/${id}/`,
      providesTags: ["Kids"],
    }),

    // create
    createKid: builder.mutation({
      query: (data) => ({
        url: "/kids/create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Kids"],
    }),

    // update
    updateKid: builder.mutation({
      query: (data) => ({
        url: `/kids/update/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Kids"],
    }),

    // delete
    deleteKid: builder.mutation({
      query: (id) => ({
        url: `/kids/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Kids"],
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const {
  useFetchKidsQuery,
  useFetchKidQuery,
  useCreateKidMutation,
  useUpdateKidMutation,
  useDeleteKidMutation,
} = kidsApi;
