import NavBar from 'components/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavBar />
      <div>This is HomePage</div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
