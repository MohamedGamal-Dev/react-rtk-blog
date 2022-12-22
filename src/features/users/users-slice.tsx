import { UsersState } from '@/types/users';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UsersState = { data: [] };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
