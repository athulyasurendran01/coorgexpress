import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpPostService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: false,
};

export const validateCouponCode = createAsyncThunk(
  'validateCouponCode',
  async ({data, type}) => {
    const response = await httpPostService(data, type)
    return response;
  }
);

export const billing = createSlice({
  name: 'billing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(validateCouponCode.pending, (state) => {
        state.status = false;
      })
      .addCase(validateCouponCode.fulfilled, (state, action) => {
        state.status = true;
        state.value = action.payload[0];
      });
  },
});

export const billingData = (state) => state.billing;

export default billing.reducer;
