import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { parentSlice } from './slices/ParentSlice';
import { kidSlice } from './slices/KidSlice';
import { kidsApi } from './slices/KidSlice';

const rootReducer = combineReducers({
  parent: parentSlice.reducer,
  [kidsApi.reducerPath]: kidsApi.reducer, // Include the API reducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Potentially add other configuration for redux-persist if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(kidsApi.middleware), // Add the API middleware
});

export const persistor = persistStore(store);
