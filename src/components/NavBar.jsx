import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
