import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainContainer } from 'styles/GlobalStyles';

const NotFound = () => {
  return (
    <>
      <MainContainer>
        <div>This is page NotFound</div>
        <p>
          You can go to <NavLink to={'/'}>home</NavLink>
        </p>
      </MainContainer>
    </>
  );
};

export default NotFound;
