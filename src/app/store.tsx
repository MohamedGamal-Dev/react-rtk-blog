import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '@features/posts';

export const store = {
  reducer: {
    posts: postsReducer,
  },
};
