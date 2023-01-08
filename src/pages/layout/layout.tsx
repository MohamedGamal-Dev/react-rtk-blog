import {
  LayoutHeader,
  LayoutBody,
  LayoutFooter,
  LayoutNewsletter,
} from '@/pages/layout';

export const Layout = () => {
  return (
    <div className="min-h-screen min-w-full bg-background-dark">
      <LayoutHeader />
      <LayoutNewsletter />
      <LayoutBody />
      <LayoutFooter />
    </div>
  );
};
