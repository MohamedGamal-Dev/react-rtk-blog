export const HOME_PAGE = '/';
export const POST = '/post';
export const POST_ADD = '/post';
export const POST_BY_ID = `/post/:postId`;
export const POST_EDIT = `/post/:postId/edit`;

export const postDynamicRoute = (id: string = ':postId') => {
  return `/post/${id}`;
};

export const postEditDynamicRoute = (id: string = ':postId') => {
  return `/post/${id}/edit`;
};

export const navPages = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Blog',
    to: '/home',
  },
  {
    title: 'Share',
    to: '/post',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Contact US',
    to: '/404',
  },
];
