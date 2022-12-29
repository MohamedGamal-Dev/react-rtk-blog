export interface UsersState {
  data: UserType[];
  isLoading: boolean;
  error: null | string;
}

export type UserType = {
  id: string;
  name: string;
};

export interface UserProps {
  user?: UserType;
  userId?: string;
  children?: React.ReactNode;
}
