import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { tasks: [] },
  reducers: {
    createTodo (state, action) {
      state.tasks.push({
        text: action.payload.task,
        completed: false,
        key: uuidv4(),
      });
    },
    removeTodo (state, action) {
      state.tasks.splice(action.payload, 1);
    },
    toggleCompleted (state, action) {
      state.tasks[action.payload].completed =
        !state.tasks[action.payload].completed;
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { createTodo, removeTodo, toggleCompleted } = actions;

export default reducer;
