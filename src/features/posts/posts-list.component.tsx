import { Fragment } from 'react';

import { useSelector } from '@/app/use-typed-rtk-store';
import { PostType } from '@/types/posts';
import { PostItem } from '@/features/posts';
import { Loader } from '@/features/ui';

const PostsList = () => {
  const { data, isLoading, error } = useSelector((state) => {
    return state.posts;
  });

  const renderReverseList = (data: PostType[]) => {
    let postsList = [];
    for (let i = data.length - 1; i >= 0; i--) {
      const post = data[i];
      postsList.push(
        <Fragment key={post.id}>
          <PostItem post={post} />
        </Fragment>
      );
    }
    return postsList;
  };

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {renderReverseList(data)}
    </div>
  );
};

export default PostsList;
