import { useEffect } from 'react';

import { useDispatch } from '@utils/use-typed-rtk-store';
import { PostsList, fetchPosts } from '@/features/posts';
import { fetchUsers } from '@/features/users';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []);

  return (
    //
    <PostsList />
  );
};

export default App;
