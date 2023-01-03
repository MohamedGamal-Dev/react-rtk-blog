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
  const { userId, id, title, body, date, reactions } = post;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    dispatch(deletePost(post));
  };
  const handleEditClick = () => {
    navigate(postEditDynamicRoute(id));
  };

  return (
    <>
      <Link to={postDynamicRoute(id)}>
        <h2>{title}</h2>
      </Link>
      <PostAuthor userId={userId} />
      <PostDate timestamp={date} />
      <br />
      <Button primary onClick={handleEditClick}>
        <FaEdit />
      </Button>
      <Button danger onClick={handleDeleteClick}>
        <FaTrashAlt />
      </Button>
      <p>
        {body.substring(0, 100)} {`...`}
      </p>

      <PostReactions post={post!} />
      <br />
      <Link to={postDynamicRoute(id)}>Read More ⟶</Link>
      <br />
    </>
  );
};

export default PostItem;
