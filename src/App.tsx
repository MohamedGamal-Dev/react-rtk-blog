import { useEffect } from 'react';

import { useDispatch } from '@utils/use-typed-rtk-store';
import { PostsList, fetchPosts } from '@/features/posts';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    //
    <PostsList />
  );
};

export default App;
