import { parseISO, formatDistanceToNow } from 'date-fns';
import { PostDateProps } from '@/types/posts';

const PostDate = ({ timestamp }: PostDateProps) => {
  let postPeriod = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    postPeriod = `${timePeriod} ago`;
  }
  return <>{postPeriod}</>;
};

export default PostDate;
