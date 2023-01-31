import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const rootReducer = combineReducers({
  todo: todoSlice,
});

export default rootReducer;
