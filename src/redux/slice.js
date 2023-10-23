import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

export const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const slice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchAllCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = slice.reducer;
