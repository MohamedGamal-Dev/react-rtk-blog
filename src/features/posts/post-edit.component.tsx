import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { editPost } from '@/features/posts';
import { useStoreState } from '@/app/use-store-state';
import { postDynamicRoute } from '@/routes';

const PostEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  const { getUserById, getPostById } = useStoreState();
  const post = getPostById(postId!);
  const postAuthor = getUserById(post.userId);

  const initialState = {
    title: post.title,
    body: post.body,
  };
  const [elementState, setElementState] = useState(initialState);
  const { title, body } = elementState;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(editPost({ post, titleUpdate: title, bodyUpdate: body }));
    navigate(postDynamicRoute(post.id));
  };

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col space-y-4 bg-slate-400"
          >
            <input
              name="title"
              value={title}
              onChange={handleOnChange}
              placeholder="Please Enter Post Title"
              required
            />

            <textarea
              name="body"
              value={body}
              onChange={handleOnChange}
              rows={4}
              placeholder="Please Enter Post Content"
              required
            ></textarea>

            <p>Author:{postAuthor.name}</p>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
