import { BaseURL_DEV } from '@/routes/api';
import { PostType } from '@/types/posts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deletePost = createAsyncThunk(
  'post/delete',
  async (post: PostType) => {
    await axios.delete(`${BaseURL_DEV}/posts/${post.id}`);
    return post;
  }
);
