import React from 'react';
import { useSelector } from '@utils/use-typed-rtk-store';

const PostsList: React.FunctionComponent = () => {
  const { data, isLoading, error } = useSelector((state) => {
    return state.posts;
  });

  const renderList = () => {
    return data.map((post) => <h2 key={post.id}>{post.title}</h2>);
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
