import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './BaseUrl';

const parentsApi = createApi({
  reducerPath: 'parentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Adjust this to where your token is stored
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/parents/signin',
        method: 'POST',
        body: userData,
      }),
    }),
    signUpUser: builder.mutation({
      query: (userData) => ({
        url: '/parents/signup',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = parentsApi;
export default parentsApi.reducer