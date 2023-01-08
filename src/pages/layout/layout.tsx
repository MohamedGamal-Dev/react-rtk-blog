import { LayoutHeader, LayoutBody, LayoutFooter } from '@/pages/layout';

export const Layout = () => {
  return (
    <div className="min-h-screen min-w-full bg-background-dark">
      <LayoutHeader />
      <LayoutBody />
      <LayoutFooter />
    </div>
  );
};
