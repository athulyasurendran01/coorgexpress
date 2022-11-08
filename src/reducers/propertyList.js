import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: false
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
        state.status = false;
      })
      .addCase(getItemsArray.fulfilled, (state, action) => {
        state.status = true;
        state.value = action.payload[0];
      });
  },
});

export const itemsArray = (state) => state.propertyList;

export default propertyList.reducer;
