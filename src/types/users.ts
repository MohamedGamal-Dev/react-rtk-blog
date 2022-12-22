export interface UsersState {
  data: UserType[];
  isLoading: boolean;
  error: null | string;
}

export type UserType = {
  id: string;
  name: string;
};
