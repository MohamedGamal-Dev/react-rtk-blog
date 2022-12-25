import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { PostProps } from '@/types/posts';
import { Button } from '@ui/forms';
import { deletePost } from '@/features/posts';

const PostItem: React.FunctionComponent<PostProps> = ({ post }) => {
  const { title, body } = post;
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(dispatch(deletePost(post)));
  };

  return (
    <>
      <h2>{title}</h2>
      <p>
        {body.substring(0, 100)} {`...`}
      </p>
      <br />
      <Button danger onClick={handleClick}>
        <FaTrashAlt />
      </Button>
    </>
  );
};

export default PostItem;
