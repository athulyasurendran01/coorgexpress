import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeBasicReducer from '../reducers/homeBasic'
import propertyDetailReducer from '../reducers/propertyDetail'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homeBasic: homeBasicReducer,
    propertyDetail:propertyDetailReducer
  },
});
