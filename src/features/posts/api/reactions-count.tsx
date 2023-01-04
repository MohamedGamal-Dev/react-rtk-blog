import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BaseURL_DEV } from '@/routes/api';
import { PostReactionsPrepare } from '@/types/posts';

export const reactionsCount = createAsyncThunk(
  'post/reactions',
  async ({ post, reaction }: PostReactionsPrepare) => {
    const updatedPost = {
      ...post,
      reactions: {
        ...post.reactions,
        [reaction]: post.reactions![reaction] + 1,
      },
    };

    const { data } = await axios.put(
      `${BaseURL_DEV}/posts/${updatedPost.id}`,
      updatedPost
    );
    return data;
  }
);
