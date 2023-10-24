import React from 'react';
import { StyledNavLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
