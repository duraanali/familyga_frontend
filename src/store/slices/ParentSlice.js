import axios from "utils/axios";
import { createSlice } from "@reduxjs/toolkit";
import BASE_URL from "./BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Initial state
const initialState = {
  parent: null,
  isLoading: false,
  error: null,
  // Add additional state properties as needed
};

// Parent Slice
const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getParentSuccess: (state, action) => {
      state.parent = action.payload;
      state.isLoading = false;
    },
    
  },
});

export const {
  startLoading,
  setError,
  getParentSuccess,
} = parentSlice.actions;

// Thunks
export const fetchParent = () => async (dispatch) => {
  try {
    // get token from async storage
    const token = await AsyncStorage.getItem("token");
    dispatch(startLoading());
    const response = await axios.get(`${BASE_URL}/parents/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getParentSuccess(response.data.profile));
  } catch (err) {
    dispatch(setError(err));
  }
};

// Export the reducer
export default parentSlice.reducer;