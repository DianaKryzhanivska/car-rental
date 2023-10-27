import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavWrapper = styled.div`
  padding: 20px 0;
  background: #0b44cd;
  margin-bottom: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  padding: 12px 34px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.43em;
  color: #fff;
  background-color: #3470ff;
  transition: transform 0.2s, background-color 0.2s;

  &.active {
    background-color: #fff;
    color: #0b44cd;
  }
  &:hover:not(.active) {
    background-color: #fff;
    color: #0b44cd;
    transform: scale(1.1);
  }
`;
