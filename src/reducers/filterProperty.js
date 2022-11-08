import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpFilterGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
  data: []
};

export const filterItem = createAsyncThunk(
  'home/filterProperty',
  async ({type, page, option}) => {
    const response = await httpFilterGetService(type, page, option)
    return response;
  }
);

export const filterProperty = createSlice({
  name: 'filterProperty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterItem.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload[0];
      });
  },
});

export const itemsArray = (state) => state.filterProperty.data;

export default filterProperty.reducer;
