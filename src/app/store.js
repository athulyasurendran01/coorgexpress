import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeBasicReducer from '../reducers/homeBasic'
import propertyDetailReducer from '../reducers/propertyDetail'
import propertyListReducer from '../reducers/propertyList'
import filterPropertyReducer from '../reducers/filterProperty'
import authenticationReducer from '../reducers/authentication'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homeBasic: homeBasicReducer,
    propertyDetail:propertyDetailReducer,
    user:authenticationReducer,
    propertyList: propertyListReducer,
    filterProperty: filterPropertyReducer
  }
});
