import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BaseURL_DEV } from '@/routes/api';
import { PostEditPrepare } from '@/types/posts';

export const editPost = createAsyncThunk(
  'post/edit',
  async ({ post, titleUpdate, bodyUpdate }: PostEditPrepare) => {
    const editedPost = { ...post, title: titleUpdate, body: bodyUpdate };
    const { data } = await axios.put(
      `${BaseURL_DEV}/posts/${editedPost.id}`,
      editedPost
    );
    return data;
  }
);
