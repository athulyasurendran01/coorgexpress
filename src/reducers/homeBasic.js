import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGetService } from '../app/httpHandler';

const initialState = {
  value: 0,
  status: 'idle',
};

export const getHomepage = createAsyncThunk(
  'home/fetchHomeBasic',
  async () => {
    const response = await httpGetService('index')
    return response;
  }
);

export const homeBasic = createSlice({
  name: 'homeBasic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomepage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHomepage.fulfilled, (state, action) => {
        // making object array for autocomplete search location

        // const result = []
        // for (const [key, value] of Object.entries(action.payload.locations)) {
        //     result.push({ id: key, title: value });
        // }

        // const result1 = []
        // for (const [key, value] of Object.entries(action.payload.property_type)) {
        //   result1.push({ id: key, title: value.PropertyType.name, logo: value.PropertyType.logo });
        // }

        state.status = 'idle';
        state.value = action.payload[0];
        // state.propertyHighlights = {
        //   "amenities" : action.payload.amenities,
        //   "cities" : action.payload.cities,
        //   "locations" : result,
        //   "property_type" : result1,
        //   "homestayLists": action.payload.homestayLists
        // };
      });
  },
});

export const homeBasics = (state) => state.homeBasic.value;
export const propertyHighlights = (state) => state.homeBasic.propertyHighlights;

export default homeBasic.reducer;
