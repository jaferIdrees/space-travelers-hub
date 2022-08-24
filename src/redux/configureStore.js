import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const initialState = {};
const middleware = [thunk];
const appReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const missionsStore = configureStore({
  reducer: appReducer,
  initialState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

export default missionsStore;
