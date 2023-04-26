import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import tasksReduces from './slices/tasksSlice';

const rootReducer = combineReducers({
  usersData: usersReducer,
  tasksData: tasksReduces,
});

export default rootReducer;
