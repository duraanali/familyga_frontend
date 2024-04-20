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
import { authApi } from './slices/AuthSlice';
import authReducer from './slices/AuthSlice';
import parentReducer from './slices/ParentSlice';

// Combine the API reducers
const rootReducer = combineReducers({
  [kidsApi.reducerPath]: kidsApi.reducer,
  [doctorsApi.reducerPath]: doctorsApi.reducer,
  [hospitalsApi.reducerPath]: hospitalsApi.reducer,
  [schoolsApi.reducerPath]: schoolsApi.reducer,
  [teachersApi.reducerPath]: teachersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    parent: parentReducer,
  

});

// Set up Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Optionally, add blacklist or whitelist to exclude or include specific slices
  blacklist: ['authApi']
};

// Apply the Redux Persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    .concat(
      kidsApi.middleware,
      doctorsApi.middleware,
      hospitalsApi.middleware,
      schoolsApi.middleware,
      teachersApi.middleware,
      authApi.middleware,
    ),
});

// Create the persistor for the store
export const persistor = persistStore(store);
