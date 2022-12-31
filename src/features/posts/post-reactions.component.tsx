import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import { PostProps } from '@/types/posts';
import { useDispatch } from '@/app/use-typed-rtk-store';
import { Button } from '@ui/forms';

const PostReactions = ({ post }: PostProps) => {
  const dispatch = useDispatch();

  let reactionsIcons = {
    thumbsUp: <FaThumbsUp />,
    thumbsDown: <FaThumbsDown />,
  };

  return (
    <>
      {Object.entries(reactionsIcons).map(([reaction, icon]) => {
        return (
          <Button
            key={reaction}
          >
            {icon}

            <div>{reactions![reaction]}</div>
          </Button>
        );
      })}
    </>
  );
};

export default PostReactions;
