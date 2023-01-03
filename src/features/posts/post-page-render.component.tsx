import { useParams, useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { useStoreState } from '@/app/use-store-state';
import { HOME_PAGE, postEditDynamicRoute } from '@/routes';
import { deletePost, PostReactions } from '@/features/posts';
import { Button } from '@ui/forms';

const PostPageRender = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { getPostById } = useStoreState();
  const post = getPostById(postId!);
  const { id, title, body } = post;

  const handleDeleteClick = () => {
    dispatch(deletePost(post));
    navigate(HOME_PAGE);
  };
  const handleEditClick = () => {
    navigate(postEditDynamicRoute(id));
  };

  return (
    <>
      <h2>{title}</h2>

      <Button primary onClick={handleEditClick}>
        <FaEdit />
      </Button>
      <Button danger onClick={handleDeleteClick}>
        <FaTrashAlt />
      </Button>

      <p>{body}</p>

      <PostReactions post={post!} />
    </>
  );
};

export default PostPageRender;
