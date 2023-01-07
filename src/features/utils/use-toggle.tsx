import { useCallback, useState } from 'react';

export const useToggle = (initialState = false): [boolean, any, any] => {
  const [status, setStatus] = useState(initialState);

  const toggle = useCallback(() => setStatus((status) => !status), []);

  const setToggleStatus = (value: boolean) => setStatus(value);

  return [status, toggle, setToggleStatus];
};
