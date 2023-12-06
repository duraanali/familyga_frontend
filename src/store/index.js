import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Import your API slices
import { kidsApi } from './slices/KidSlice';
import { doctorsApi } from './slices/DoctorSlice';
import { hospitalsApi } from './slices/HospitalSlice';
import { schoolsApi } from './slices/SchoolSlice';
import { teachersApi } from './slices/TeacherSlice';
import parentsApi from './slices/ParentSlice';
import authApi from './slices/AuthSlice';

// Combine the API reducers
const rootReducer = combineReducers({
  // Assuming these are your API slices with reducers and middleware
  [kidsApi.reducerPath]: kidsApi.reducer,
  [doctorsApi.reducerPath]: doctorsApi.reducer,
  [hospitalsApi.reducerPath]: hospitalsApi.reducer,
  [schoolsApi.reducerPath]: schoolsApi.reducer,
  [teachersApi.reducerPath]: teachersApi.reducer,
  parent: parentsApi,
  auth: authApi,
});

// Set up Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // You might want to add "blacklist" or "whitelist" configurations here
};

// Apply the Redux Persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types from Redux Persist as they can contain non-serializable values
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // Apply the middleware for each of the RTK Query APIs
    .concat(kidsApi.middleware)
    .concat(doctorsApi.middleware)
    .concat(hospitalsApi.middleware)
    .concat(schoolsApi.middleware)
    .concat(teachersApi.middleware)
    .concat(parentsApi.middleware)
    .concat(authApi.middleware),
    });

// Create the persistor for the store
export const persistor = persistStore(store);
