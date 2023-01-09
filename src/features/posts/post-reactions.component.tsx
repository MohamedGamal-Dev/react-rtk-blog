import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import { PostProps } from '@/types/posts';
import { useDispatch } from '@/app/use-typed-rtk-store';
import { Button } from '@ui/forms';
import { reactionsCount } from '@/features/posts';

const PostReactions = ({ post }: PostProps) => {
  const dispatch = useDispatch();
  const { reactions } = post!;

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
            dispatch(reactionsCount({ post, reaction }));
          }}
          className="flex flex-row items-center space-x-2 overflow-hidden rounded-lg bg-primary-main  py-1.5 pl-2 pr-1 text-light-primary  hover:bg-secondary-main focus:outline-none"
        >
          {icon}

          <div className="rounded-lg bg-light-primary px-3.5 py-0 font-medium text-dark-primary ">
            {reactions![reaction]}
          </div>
        </button>
      );
    }
  );

  return <>{renderReactions}</>;
};

export default PostReactions;
