import React from 'react';

import { PostProps } from '@/types/posts';

const PostItem: React.FunctionComponent<PostProps> = ({ post }) => {
  const { userId, id, title, body } = post;

  return (
    <>
      <h2>{title}</h2>
      <p>
        {body.substring(0, 100)} {`...`}
      </p>
      <br />
    </>
  );
};

export default PostItem;
