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
  date: string;
  reactions?: {
    [reaction: string]: number;
  };
}

export interface PostProps {
  post: PostType;
  children?: React.ReactNode;
}

export interface PostDateProps {
  timestamp: string;
  children?: React.ReactNode;
}
export interface PostPrepare {
  userId: string;
  title: string;
  body: string;
}

export interface PostEditPrepare {
  post: PostType;
  titleUpdate: string;
  bodyUpdate: string;
}

export interface PostReactionsPrepare {
  post: PostType;
  reaction: string;
}
