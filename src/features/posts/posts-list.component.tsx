import React, { Fragment } from 'react';

import { useSelector } from '@utils/use-typed-rtk-store';
import { PostType } from '@/types/posts';
import PostItem from './post-item.component';

const PostsList: React.FunctionComponent = () => {
  const { data, isLoading, error } = useSelector((state) => {
    return state.posts;
  });

  const renderList = () => {
    return data.map((post: PostType) => (
      <Fragment key={post.id}>
        <PostItem post={post} />
      </Fragment>
    ));
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>{error}</p>}
      {renderList()}
    </div>
  );
};

export default PostsList;
