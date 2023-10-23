import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './slice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
