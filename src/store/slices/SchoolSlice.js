import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";

export const schoolsApi = createApi({
  reducerPath: "schoolsApi",
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
  tagTypes: ["Schools"],
  endpoints: (builder) => ({
    // get all kids
    fetchSchools: builder.query({
      query: () => "/schools/",
      providesTags: ["Schools"],
    }),

    // get kid by id
    fetchSchool: builder.query({
      query: (id) => `/schools/school/${id}/`,
      providesTags: ["Schools"],
    }),

    // create
    createSchool: builder.mutation({
      query: (data) => ({
        url: "/schools/create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Schools"],
    }),

    // update
    updateSchool: builder.mutation({
      query: (data) => ({
        url: `/schools/update/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Schools"],
    }),

    // delete
    deleteSchool: builder.mutation({
      query: (id) => ({
        url: `/schools/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Schools"],
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const {
    useFetchSchoolsQuery,
    useFetchSchoolQuery,
    useCreateSchoolMutation,
    useUpdateSchoolMutation,
    useDeleteSchoolMutation,
    } = schoolsApi;
