// parentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "./BaseUrl";
import axios from "axios";

// Async thunk for logging in
export const loginUser = createAsyncThunk(
  "parent/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/parents/signin`, userData); // corrected endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for signing up
export const signUpUser = createAsyncThunk(
  "parent/signUpUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/parents/signup`, userData); // corrected endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const parentSlice = createSlice({
  name: "parent",
  initialState: {
    isLoggedIn: false,
    parent: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      dob: "",
      parent_type: "",
    },
    error: "",
    loading: false,
    token: ''
  },
  reducers: {
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.parent = {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        dob: "",
        parent_type: "",
      };
      state.error = "";
      state.loading = false;
      state.token = ''
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.parent = action.payload;
      state.error = "";
      state.loading = false;
      state.token = action.payload.family_parent_token
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.parent = {};
      state.error = action.payload;
      state.loading = false;
    },
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.parent = action.payload;
      state.error = "";
      state.loading = false;
      state.token = action.payload.family_parent_token
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.parent = {};
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { logoutUser } = parentSlice.actions;
export default parentSlice.reducer;
