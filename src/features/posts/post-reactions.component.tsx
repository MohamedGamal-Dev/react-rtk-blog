
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import { PostProps } from '@/types/posts';
import { useDispatch } from '@/app/use-typed-rtk-store';
import { Button } from '@ui/forms';
import { reactionCount } from '@/features/posts';

const PostReactions = ({ post }: PostProps) => {
  const dispatch = useDispatch();
  const { id, reactions } = post!;

  let reactionsIcons = {
    thumbsUp: <FaThumbsUp />,
    thumbsDown: <FaThumbsDown />,
  };

  const renderReactions = Object.entries(reactionsIcons).map(
    ([reaction, icon]) => {
      return (
        <button
          key={reaction}
          onClick={() => {
            dispatch(reactionCount({ id, reaction }));
          }}
        >
          {icon}

          <div>{reactions![reaction]}</div>
        </button>
      );
    }
  );

  return <>{renderReactions}</>;
};

export default PostReactions;
