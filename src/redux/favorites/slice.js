const { createSlice } = require('@reduxjs/toolkit');

export const slice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteCars: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteCars.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;
export const favoritesReducer = slice.reducer;
