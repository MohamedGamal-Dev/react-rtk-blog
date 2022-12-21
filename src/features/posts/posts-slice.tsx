import { createSlice } from '@reduxjs/toolkit';
import { addPost, fetchPosts } from '@/features/posts';
import { PostsState } from '@/types/posts';

const initialState: PostsState = { data: [], isLoading: false, error: null };

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message!;
    });
    
    builder.addCase(addPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message!;
    });
  },
});

export const postsReducer = postsSlice.reducer;
