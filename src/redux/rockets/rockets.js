import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetRockets from '../../API/rocketsService';

const initialState = [];

export const retrieveRockets = createAsyncThunk(
  'rockets/retrieveRockets',
  async () => {
    const response = await GetRockets();
    const newState = [];
    response.data.forEach((rocket) => {
      const {
        // eslint-disable-next-line camelcase
        id, rocket_name, description, flickr_images,
      } = rocket;
      newState.push({
        // eslint-disable-next-line camelcase
        id, rocket_name, description, flickr_images,
      });
    });
    return newState;
  },
);

// Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reserveRocket: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.payload.rocket.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(retrieveRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
