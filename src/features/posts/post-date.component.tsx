import { parseISO, formatDistanceToNow } from 'date-fns';
import { PostDateProps } from '@/types/posts';

const PostDate = ({ timestamp }: PostDateProps) => {
  if (!timestamp) return;

  let postPeriod = '';
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  postPeriod = `${timePeriod} ago`;

  return <>{postPeriod}</>;
};

export default PostDate;
