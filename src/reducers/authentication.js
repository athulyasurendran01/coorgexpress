import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpPostService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: false,
};

export const authLogin = createAsyncThunk(
  'authentication/login',
  async (data) => {
    const response = await httpPostService('login', data)
    return response;
  }
);

export const authRegister = createAsyncThunk(
  'authentication/register',
  async (data) => {
    const response = await httpPostService('register', data)
    return response;
  }
);

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.status = false;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = true;
        state.value = action.payload.response;
      });
  },
});

export const register = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.response;
      });
  },
});

export const userData = (state) => state.login.user;
export const userRegister = (state) => state.register.user;

export default login.reducer;
