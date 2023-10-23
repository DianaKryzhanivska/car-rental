import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>This is page NotFound</div>
      <p>
        You can go to <NavLink to={'/'}>home</NavLink>
      </p>
    </>
  );
};

export default NotFound;
