import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";

export const teachersApi = createApi({
  reducerPath: "teachersApi",
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
  tagTypes: ["Teachers"],
  endpoints: (builder) => ({
    // get all
    fetchTeachers: builder.query({
      query: () => "/teachers/",
      providesTags: ["Teachers"],
    }),

    // get by id
    fetchTeacher: builder.query({
      query: (id) => `/teachers/teacher/${id}/`,
      providesTags: ["Teachers"],
    }),

    // create
    createTeacher: builder.mutation({
      query: (data) => ({
        url: "/teachers/create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Teachers"],
    }),

    // update
    updateTeacher: builder.mutation({
      query: (data) => ({
        url: `/teachers/update/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Teachers"],
    }),

    // delete
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teachers/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teachers"],
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const {
    useFetchTeachersQuery,
    useFetchTeacherQuery,
    useCreateTeacherMutation,
    useUpdateTeacherMutation,
    useDeleteTeacherMutation,
    } = teachersApi;
