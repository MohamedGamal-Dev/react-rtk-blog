import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from '@utils/use-typed-rtk-store';
import { PostsList, PostAdd, fetchPosts } from '@/features/posts';
import { fetchUsers } from '@/features/users';
import { HOME_PAGE, POST } from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []);

  return (
    <Routes>
      <Route>
        <Route path={HOME_PAGE} element={<PostsList />} />
        <Route path={POST}>
          <Route index element={<PostAdd />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
