import React from 'react';
import { NavList, NavWrapper, StyledNavLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavWrapper>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default NavBar;
