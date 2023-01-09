import { useParams, useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { useStoreState } from '@/app/use-store-state';
import { HOME_PAGE, postEditDynamicRoute } from '@/routes';
import {
  deletePost,
  PostAuthor,
  PostDate,
  PostReactions,
} from '@/features/posts';
import { Button } from '@ui/forms';

const PostPageRender = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { getPostById } = useStoreState();
  const post = getPostById(postId!);
  const { userId, id, title, body, date, image } = post;

  const handleDeleteClick = () => {
    dispatch(deletePost(post));
    navigate(HOME_PAGE);
  };
  const handleEditClick = () => {
    navigate(postEditDynamicRoute(id));
  };

  return (
    <div className="bg-dark-off border border-dark-primary rounded-lg shadow-md ">
      {image ? (
        <img src={image!.src} alt={image!.alt} className="rounded-t-lg" />
      ) : null}

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h2>

          <div className="flex items-center space-x-1">
            <button
              className="transform cursor-pointer rounded bg-primary-dark px-3 py-2 font-bold text-white transition-colors duration-200 hover:bg-secondary-dark hover:text-dark-primary"
              onClick={handleEditClick}
            >
              <FaEdit />
            </button>

            <Button
              className="transform cursor-pointer rounded bg-danger-dark px-3 py-2 font-bold text-white transition-colors duration-200 hover:bg-light-secondary hover:text-danger-dark"
              onClick={handleDeleteClick}
            >
              <FaTrashAlt />
            </Button>
          </div>
        </div>

        <div className="flex items-start space-x-2 border-b-2 border-divider-dark pb-1">
          <div className="font-serif text-sm font-medium text-secondary-dark">
            <PostAuthor userId={userId} />
          </div>

          <div className="text-sm font-light text-light-secondary">
            <PostDate timestamp={date} />
          </div>
        </div>

        <p className="py-3 font-normal text-light-off">{body}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <PostReactions post={post!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPageRender;
