import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
};

export const getHomepage = createAsyncThunk(
  'home/fetchSlider',
  async () => {
    const response = await httpGetService('')
    return response;
  }
);

export const slider = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomepage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHomepage.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload.response;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = slider.actions;

export const sliders = (state) => state.slider.value;

export default slider.reducer;
