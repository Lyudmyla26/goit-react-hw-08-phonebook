import { Outlet } from 'react-router-dom';
import { Container, MainBlock } from './Layout.styled';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainBlock>
        <Navigation />
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </MainBlock>
    </Container>
  );
};
