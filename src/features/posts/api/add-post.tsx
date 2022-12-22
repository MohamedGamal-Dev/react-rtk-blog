import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

import { BaseURL_DEV } from '@/routes/api';
import { PostPrepare, PostType } from '@/types/posts';

export const addPost = createAsyncThunk(
  'post/add',
  async ({ userId, title, body }: PostPrepare) => {
    const newPost: PostType = { userId, id: nanoid(), title, body };

    const response = await axios.post(`${BaseURL_DEV}/posts`, newPost);
    return response.data;
  }
);
