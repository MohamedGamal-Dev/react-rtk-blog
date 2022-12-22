import { createSlice } from '@reduxjs/toolkit';

import { UsersState } from '@/types/users';
import { fetchUsers } from '@/features/users';

const initialState: UsersState = { data: [], isLoading: false, error: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message!;
      });
  },
});

export const usersReducer = usersSlice.reducer;
