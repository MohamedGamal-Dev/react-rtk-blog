import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export type OnChangeType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>;

export const useFormState = (
  initialState?: {
    [key: string]: string;
  },
  onFormSubmit?: () => void
) => {
  const navigateTo = useNavigate();
  const [elementState, setElementState] = useState(initialState);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFormSubmit!();
  };

  const handleOnChange = (event: OnChangeType) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const reset = () => {
    setElementState(initialState);
  };
  const navigate = (location: string) => {
    navigateTo(location);
  };

  return {
    elementState,
    setElementState,
    handleFormSubmit,
    handleOnChange,
    reset,
    navigate,
  };
};
