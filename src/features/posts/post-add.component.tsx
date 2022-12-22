import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from '@utils/use-typed-rtk-store';
import { addPost } from '@/features/posts';

const PostAdd: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.data);

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
          <option value={user.id}>{user.name}</option>
        </React.Fragment>
      );
    });
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

            <select
              name="userId"
              value={userId}
              onChange={handleOnChange}
              id="author"
            >
              <option value=""> Please choose author </option>
              {renderUsersOptionList()}
            </select>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostAdd;
