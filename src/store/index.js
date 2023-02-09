import { configureStore } from '@reduxjs/toolkit';
import todosesReduces from './slices/todosesSlice';

const store = configureStore({
  reducer: {
    todosesData: todosesReduces,
  },
});

export default store;
