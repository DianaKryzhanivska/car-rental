import { styled } from 'styled-components';

export const SpinnerWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  align-items: center;
  justify-content: center;
`;
