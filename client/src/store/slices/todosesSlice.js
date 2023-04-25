import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const TODOSES_SLICE_NAME = 'todoses';

export const createTodose = createAsyncThunk(
  `${TODOSES_SLICE_NAME}/create`,
  async (values, thunkAPI) => {
    try {
      const response = await API.createNewTodos({
        isDone: false,
        ...values,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

export const getTodoses = createAsyncThunk(
  `${TODOSES_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getTodoses();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

export const deleteTodos = createAsyncThunk(
  `${TODOSES_SLICE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await API.deleteTodos(payload);
      return payload;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

export const updateTodos = createAsyncThunk(
  `${TODOSES_SLICE_NAME}/update`,
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await API.updateTodos(id, values);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

const todosesSlice = createSlice({
  name: TODOSES_SLICE_NAME,
  initialState: {
    todoses: [],
    isFetching: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    // CREATE
    builder.addCase(createTodose.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createTodose.fulfilled, (state, action) => {
      state.todoses.push(action.payload);
      state.isFetching = false;
    });
    builder.addCase(createTodose.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    // GET
    builder.addCase(getTodoses.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getTodoses.fulfilled, (state, action) => {
      state.todoses = [...action.payload];
      state.isFetching = false;
    });
    builder.addCase(getTodoses.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    // DELETE
    builder.addCase(deleteTodos.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.todoses = state.todoses.filter(p => p.id !== action.payload);
      state.isFetching = false;
    });
    builder.addCase(deleteTodos.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    // UPDATE
    builder.addCase(updateTodos.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(updateTodos.fulfilled, (state, action) => {
      const foundIndex = state.todoses.findIndex(
        p => p.id === action.payload.id
      );
      state.todoses[foundIndex] = action.payload;
      state.isFetching = false;
    });
    builder.addCase(updateTodos.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
  },
});

const { reducer } = todosesSlice;

export default reducer;
