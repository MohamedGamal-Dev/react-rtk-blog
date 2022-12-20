import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '@/features/posts';
import { PostsState} from '@/types/posts';

const initialState: PostsState = { data: [], isLoading: false, error: null };

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error;
    });
  },
});

export const postsReducer = postsSlice.reducer;
