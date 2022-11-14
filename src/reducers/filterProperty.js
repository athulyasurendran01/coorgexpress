import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpFilterGetService } from '../app/httpHandler';

const initialState = {
  value: [],
  status: false
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
        state.status = false;
      })
      .addCase(filterItem.fulfilled, (state, action) => {
        state.status = true;
        state.value = action.payload[0];
      });
  },
});

export const filterItemsArray = (state) => state.filterProperty;

export default filterProperty.reducer;
