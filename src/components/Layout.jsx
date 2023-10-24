import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <hr />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
