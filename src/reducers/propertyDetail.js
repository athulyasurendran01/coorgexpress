import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService, httpMailService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: false,
};

export const getPropertyDetail = createAsyncThunk(
  'home/fetchPropertyDetail',
  async ({type, id}) => {
    const response = await httpGetService(type, id)
    return response;
  }
);

export const sendMail = createAsyncThunk(
  'home/sendMail',
  async () => {
    const response = await httpMailService()
    alert("Mail sent successfully")
    // return response;
  }
);

export const propertyDetail = createSlice({
  name: 'propertyDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyDetail.pending, (state) => {
        state.status = false;
      })
      .addCase(getPropertyDetail.fulfilled, (state, action) => {
        state.status = true;
        state.value = action.payload[0];
      });
  },
});

export const propertyData = (state) => state.propertyDetail;

export default propertyDetail.reducer;
