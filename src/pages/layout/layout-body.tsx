import { Container } from '@/features/ui';
import { Outlet } from 'react-router-dom';

export const LayoutBody = () => {
  return (
    <Container center className="py-4">
      <Outlet />
    </Container>
  );
};
