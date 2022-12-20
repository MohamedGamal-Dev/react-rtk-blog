import { useEffect } from 'react';

import { useDispatch } from '@/features/utils/use-typed-rtk-store';
import { fetchPosts } from '@/features/posts';

import PostsList from '@/features/posts/posts-list.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    //
    <PostsList />
  );
};

export default App;
