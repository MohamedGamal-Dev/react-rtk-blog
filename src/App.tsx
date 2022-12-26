import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { fetchPosts, PostsList, PostAdd, PostEdit } from '@/features/posts';
import { fetchUsers } from '@/features/users';
import { HOME_PAGE, POST, POST_EDIT } from '@/routes';

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
          <Route path={POST_EDIT} element={<PostEdit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
