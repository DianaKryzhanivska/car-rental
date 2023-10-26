import { StyledNavLink } from 'components/NavBar/NavBar.styled';
import React from 'react';
import { MainContainer } from 'styles/GlobalStyles';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <>
      <MainContainer>
        <NotFoundWrapper>
          <p>Page not found.</p>
          <p>
            You can go to <StyledNavLink to={'/'}>Home</StyledNavLink>
          </p>
        </NotFoundWrapper>
      </MainContainer>
    </>
  );
};

export default NotFound;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 22px;
`;
