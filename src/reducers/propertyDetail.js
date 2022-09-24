import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
};

export const getPropertyDetail = createAsyncThunk(
  'home/fetchPropertyDetail',
  async (id) => {
    const response = await httpGetService(id)
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
        state.homestayDetails = action.payload.homestayDetails;
      });
  },
});

export const propertyData = (state) => state.propertyDetail.homestayDetails;

export default propertyDetail.reducer;
