import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseURL_DEV } from '@/routes/api';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get(`${BaseURL_DEV}/users`);

  return response.data;
});
