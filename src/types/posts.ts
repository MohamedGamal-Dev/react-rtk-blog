export interface PostsState {
  data: PostType[];
  isLoading: boolean;
  error: null | {};
}

export interface PostType {
  userId: string;
  id: string;
  title: string;
  body: string;
}


