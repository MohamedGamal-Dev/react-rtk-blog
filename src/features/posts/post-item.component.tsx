import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { PostProps } from '@/types/posts';
import { Button } from '@ui/forms';
import {
  deletePost,
  PostAuthor,
  PostDate,
  PostReactions,
} from '@/features/posts';
import { postDynamicRoute, postEditDynamicRoute } from '@/routes';

const PostItem = ({ post }: PostProps) => {
  const { userId, id, title, body, date, image } = post;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    dispatch(deletePost(post));
  };
  const handleEditClick = () => {
    navigate(postEditDynamicRoute(id));
  };

  let randomImage = image ? (
    <img src={image!.src} alt={image!.alt} className="rounded-t-lg" />
  ) : null;

  return (
    <div className="max-w-none lg:max-w-sm mr-2 mb-2 bg-dark-off border border-dark-primary rounded-lg shadow-md ">
      <Link to={postDynamicRoute(id)}>{randomImage}</Link>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <Link to={postDynamicRoute(id)}>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </Link>

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

        <p className="py-3 font-normal text-light-off">
          {body.substring(0, 100)} {body.length > 100 ? `...` : null}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <PostReactions post={post!} />
          </div>

          <Link
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-primary bg-primary-main rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 "
            to={postDynamicRoute(id)}
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1 fill-light-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
