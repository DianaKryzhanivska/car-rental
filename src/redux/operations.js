import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carRentalApi = axios.create({
  baseURL: 'https://6536327ac620ba9358ed1bef.mockapi.io',
});

export const fetchAllCars = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await carRentalApi.get('/adverts', {
        params: {
          page,
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
