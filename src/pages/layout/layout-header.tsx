import { LayoutHeaderNav, LayoutHeaderHero } from '@/pages/layout';

export const LayoutHeader = () => {
  return (
    <header className="flex  flex-col justify-between space-y-4 bg-background-dark ">
      {/* min-h-screen */}
      <LayoutHeaderNav />
      <LayoutHeaderHero />
    </header>
  );
};
