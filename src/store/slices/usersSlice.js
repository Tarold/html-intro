import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const USERS_SLICE_NAME = 'users';

//thunkAPI: dispath, rejectWithValue

export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (currentPage, thunkAPI) => {
    const { dispatch } = thunkAPI; // за необхідності, щоб діспатчити екшни до інших сутностей
    const data = await fetch(
      `https://randomuser.me/api?seed=pe&page=${currentPage}&results=3`
    ).then(response => response.json());
    return data.results;
    // dispatch(createUsers(data.results));
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [{ name: 'Test' }],
    isFetching: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = usersSlice;

const { createUsers } = actions;

export default reducer;
