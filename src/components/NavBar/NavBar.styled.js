import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavWrapper = styled.div`
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  color: black;

  &.active {
    background-color: #0b44cd;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #3470ff;
  }
`;
