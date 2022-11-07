import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
  data: []
};

export const getItemsArray = createAsyncThunk(
  'home/fetchPropertyList',
  async ({type, page}) => {
    const response = await httpGetService(type,'', page)
    return response;
  }
);

export const propertyList = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsArray.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getItemsArray.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload[0];
      });
  },
});

export const itemsArray = (state) => state.propertyList.data;

export default propertyList.reducer;
