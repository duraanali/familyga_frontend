import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './BaseUrl';

export const kidsApi = createApi({
  reducerPath: 'kidsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
        const token = getState().parent.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
  }),
  endpoints: (builder) => ({
    fetchKids: builder.query({
      query: () => '/kids/',
    }),
  }),
});

// Export the auto-generated hook for the `fetchKids` query endpoint
export const { useFetchKidsQuery } = kidsApi;
