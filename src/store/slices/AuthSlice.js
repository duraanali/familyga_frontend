import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from './BaseUrl';
import { PURGE } from "redux-persist";

const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { family_parent_token } }) => {
      state.token = family_parent_token;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/parents/signin/',
        method: 'POST',
        body: userData,
      }),
      transformResponse: (response) => response,
      onFulfilled: async (response, { dispatch }) => {
        console.log('Login onFulfilled:', response)
        if (response && response.family_parent_token) {
          dispatch(setCredentials({ family_parent_token: response.family_parent_token }));
          try {
            await AsyncStorage.setItem('token', response.family_parent_token);
          } catch (error) {
            console.error('AsyncStorage error:', error);
          }
        }
      },    
        
      onError: (error) => {
        console.error('Error in loginUser mutation:', error);
      }
    }),
    signUpUser: builder.mutation({
      query: (userData) => ({
        url: '/parents/signup/',
        method: 'POST',
        body: userData,
      }),
    }),
    logoutUser: builder.mutation(
      console.log('logoutUser'),
      {
        query: () => ({
          url: '/parents/logout/',
          method: 'POST',
        }),
        onFulfilled: async (_, { dispatch }) => {
          dispatch(logOut());
          try {
            await AsyncStorage.removeItem('token');
          } catch (error) {
            console.error('AsyncStorage error:', error);
          }
        },
    }),
  }),
});

export const { setCredentials, logOut, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
export const {
  useLoginUserMutation,
  useSignUpUserMutation,
  useLogoutUserMutation,
} = authApi;
