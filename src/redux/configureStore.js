import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
// import categoriesReducer from './categories/categories';

const initialState = {};
const middleware = [thunk];
const appReducer = combineReducers({
  missionsReducer,
});

const missionsStore = configureStore({
  reducer: appReducer,
  initialState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

export default missionsStore;
