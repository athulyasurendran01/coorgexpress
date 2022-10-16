import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
};

export const getPropertyDetail = createAsyncThunk(
  'home/fetchPropertyDetail',
  async ({type, id}) => {
    const response = await httpGetService(type, id)
    return response;
  }
);

export const propertyDetail = createSlice({
  name: 'propertyDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPropertyDetail.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload.data;
      });
  },
});

export const propertyData = (state) => state.propertyDetail.data;

export default propertyDetail.reducer;
