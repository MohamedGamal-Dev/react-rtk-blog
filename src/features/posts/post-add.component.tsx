import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from '@/app/use-typed-rtk-store';
import { addPost } from '@/features/posts';
import { useStoreState } from '@/app/use-store-state';
import { Input, TextareaFiled, Button, Container } from '@/features/ui';

const PostAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useStoreState();

  const initialState = {
    userId: '',
    title: '',
    body: '',
  };
  const [elementState, setElementState] = useState(initialState);
  const { userId, title, body } = elementState;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      addPost({
        userId,
        title,
        body,
      })
    );
    setElementState(initialState);
    navigate('/');
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

  const renderUsersOptionList = () => {
    return users.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <option
            value={user.id}
            className="bg-background-dark text-lg  text-light-primary"
          >
            {user.name}
          </option>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <Container center>
        <div className=" bg-dark-off border border-dark-primary rounded-lg shadow-md p-4">
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

            <select
              name="userId"
              value={userId}
              onChange={handleOnChange}
              id="author"
              className="block w-full rounded-lg border-2 border-primary-main bg-transparent p-2.5 text-lg text-light-primary shadow-sm shadow-primary-main outline-none focus:border-secondary-main focus:shadow-secondary-main"
            >
              <option
                value=""
                className="bg-background-dark text-lg  text-light-primary"
              >
                {' '}
                Please choose author{' '}
              </option>
              {renderUsersOptionList()}
            </select>

            <Button className="rounded-lg bg-primary-main px-5 py-2.5 text-center text-lg font-bold text-white shadow-sm shadow-dark-secondary hover:bg-secondary-dark hover:shadow-warning-light focus:outline-none">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default PostAdd;
