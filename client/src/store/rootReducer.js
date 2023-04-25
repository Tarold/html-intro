import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import todosesReduces from './slices/todosesSlice';

const rootReducer = combineReducers({
  usersData: usersReducer,
  todosesData: todosesReduces,
});

export default rootReducer;
