import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { PostProps } from '@/types/posts';
import { Button } from '@ui/forms';
import { deletePost } from '@/features/posts';
import { postDynamicRoute, postEditDynamicRoute } from '@/routes';

const PostItem = ({ post }: PostProps) => {
  const { id, title, body } = post;
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

      <p>
        {body.substring(0, 100)} {`...`}
      </p>
      <br />
      <Button primary onClick={handleEditClick}>
        <FaEdit />
      </Button>
      <Button danger onClick={handleDeleteClick}>
        <FaTrashAlt />
      </Button>
    </>
  );
};

export default PostItem;
