import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sliderReducer from '../reducers/slider'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    slider: sliderReducer
  },
});
