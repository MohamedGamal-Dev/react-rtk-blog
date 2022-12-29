import { useStoreState } from '@/app/use-store-state';
import { UserProps } from '@/types/users';

const PostAuthor = ({ userId }: UserProps) => {
  const { getUserById } = useStoreState();
  const author = getUserById(userId!);

  return <>{author ? author.name : 'Anonymous Author'}</>;
};

export default PostAuthor;
