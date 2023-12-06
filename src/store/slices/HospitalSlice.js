import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";

export const hospitalsApi = createApi({
  reducerPath: "hospitalsApi",
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
  tagTypes: ["Hospitals"],
  endpoints: (builder) => ({
    // get all kids
    fetchHospitals: builder.query({
      query: () => "/hospitals/",
      providesTags: ["Hospitals"],
    }),

    // get kid by id
    fetchHospital: builder.query({
      query: (id) => `/hospitals/hospital/${id}/`,
      providesTags: ["Hospitals"],
    }),

    // create
    createHospital: builder.mutation({
      query: (data) => ({
        url: "/hospitals/create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Hospitals"],
    }),

    // update
    updateHospital: builder.mutation({
      query: (data) => ({
        url: `/hospitals/update/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Hospitals"],
    }),

    // delete
    deleteHospital: builder.mutation({
      query: (id) => ({
        url: `/hospitals/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hospitals"],
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const {
    useFetchHospitalsQuery,
    useFetchHospitalQuery,
    useCreateHospitalMutation,
    useUpdateHospitalMutation,
    useDeleteHospitalMutation,
    } = hospitalsApi;
