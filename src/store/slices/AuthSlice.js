// AuthApi.js
import { createSlice } from '@reduxjs/toolkit';
import parentsApi from './ParentSlice';

const initialState = {
  token: null, // You might want to load this from localStorage or AsyncStorage
  isLoggedIn: false,
};

const authApi = createSlice({
  name: 'authApi',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token } }) => {
      state.token = token;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        parentsApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        parentsApi.endpoints.signUpUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const { setCredentials, logOut } = authApi;

export default authApi.reducer;
