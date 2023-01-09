import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { editPost } from '@/features/posts';
import { useStoreState } from '@/app/use-store-state';
import { postDynamicRoute } from '@/routes';
import { Input, TextareaFiled } from '@/features/ui';

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
      <div className=" bg-dark-off border border-dark-primary rounded-lg shadow-md p-4">
        <div>
          <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
            <Input
              name="title"
              value={title}
              onChange={handleOnChange}
              placeholder="Please Enter Post Title"
              required
              className="block w-full rounded-lg border-2 border-primary-main bg-transparent p-2.5 text-lg text-light-primary shadow-sm shadow-primary-main outline-none focus:border-secondary-main focus:shadow-secondary-main"
            />

            <TextareaFiled
              name="body"
              value={body}
              onChange={handleOnChange}
              rows={4}
              placeholder="Please Enter Post Content"
              required
              className="block w-full rounded-lg border-2 border-primary-main bg-transparent p-2.5 text-lg text-light-primary shadow-sm shadow-primary-main outline-none focus:border-secondary-main focus:shadow-secondary-main"
            ></TextareaFiled>

            <div className="font-serif text-sm font-medium text-secondary-dark">
              <span className="text-base  text-light-secondary">{`Author: `}</span>
              <span>{postAuthor.name}</span>
            </div>

            <button className="rounded-lg bg-primary-main px-5 py-2.5 text-center text-lg font-bold text-white shadow-sm shadow-dark-secondary hover:bg-secondary-dark hover:shadow-warning-light focus:outline-none">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
