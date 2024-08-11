import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import selectedItemsSlice from '../reducers/selectedItemsSlice';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
