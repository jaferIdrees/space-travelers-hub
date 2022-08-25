// import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketsSlice from './rockets/rockets';

// const initialState = {};
/* const appReducer = combineReducers({
  rocketsSlice,
  missionsReducer,
}); */

const store = configureStore({
  reducer: {
    rocketsSlice,
    missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
