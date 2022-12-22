import { useSelector } from '@/app/use-typed-rtk-store';
import { PostType } from '@/types/posts';
// import { shallowEqual } from 'react-redux';

export const useStoreState = () => {
  const usersState = useSelector((state) => state.users);
  const users = usersState.data;
  const isUsersLoading = usersState.isLoading;
  const usersError = usersState.error;

  const postsState = useSelector((state) => state.posts);
  const posts = postsState.data;
  const isPostsLoading = postsState.isLoading;
  const postsError = postsState.error;

  const getPostById = (postId: string): PostType => {
    let post = posts.find((post) => {
      return String(post.id) === String(postId);
    });
    return post!;
  };

  const getUserById = (userId: string) => {
    let user = users.find((user) => {
      return String(user.id) === String(userId);
    });
    return user!;
  };

  return {
    users,
    isUsersLoading,
    usersError,
    posts,
    isPostsLoading,
    postsError,
    getPostById,
    getUserById,
  };
};
