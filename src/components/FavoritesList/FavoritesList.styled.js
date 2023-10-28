import { styled } from 'styled-components';
import { MainContainer } from 'styles/GlobalStyles';

export const StyledMainContainer = styled(MainContainer)`
  padding-bottom: 50px;
`;

export const RemoveFromFavBtn = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  right: 14px;
`;
