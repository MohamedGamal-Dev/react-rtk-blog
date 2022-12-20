import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BaseURL_DEV } from '@/routes/api';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await axios.get(`${BaseURL_DEV}/posts`);
  return response.data;
});
