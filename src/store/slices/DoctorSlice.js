import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";

export const doctorsApi = createApi({
  reducerPath: "doctorsApi",
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
  endpoints: (builder) => ({
    // get all kids
    fetchDoctors: builder.query({
      query: () => "/doctors/",
    }),

    // get kid by id
    fetchDoctor: builder.query({
      query: (id) => `/doctors/doctor/${id}/`,
    }),

    // create
    createDoctor: builder.mutation({
      query: (data) => ({
        url: "/doctors/create/",
        method: "POST",
        body: data,
      }),
    }),

    // update
    updateDoctor: builder.mutation({
      query: (data) => ({
        url: `/doctors/update/${data.id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctors/delete/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const {
  useFetchDoctorsQuery,
  useFetchDoctorQuery,
  useCreateDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,
} = doctorsApi;
