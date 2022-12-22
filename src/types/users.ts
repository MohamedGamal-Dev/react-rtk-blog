export interface UsersState {
  data: UserType[];
}

export type UserType = {
  id: string;
  name: string;
};
