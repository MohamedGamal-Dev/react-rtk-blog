export interface PostsState {
  data: PostType[];
  isLoading: boolean;
  error: null | string;
}

export interface PostType {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface PostProps {
  post: PostType;
  children?: React.ReactNode;
}