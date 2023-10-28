import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavWrapper = styled.div`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.hoverBlue};
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
  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  transition: transform 0.2s, background-color 0.2s;

  &.active {
    background-color: ${({ theme }) => theme.colors.mainWhite};
    color: ${({ theme }) => theme.colors.hoverBlue};
  }
  &:hover:not(.active) {
    background-color: ${({ theme }) => theme.colors.mainWhite};
    color: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }
`;
