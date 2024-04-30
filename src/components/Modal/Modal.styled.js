import { styled } from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
`;

export const ModalWindow = styled.div`
  padding: 40px;
  width: 541px;
  height: auto;
  max-height: 720px;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 24px;
  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 1439px) {
    max-height: 620px;
  }

  @media only screen and (max-width: 767px) {
    width: 425px;
  }
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;

  & svg {
    stroke: #000;
    width: 24px;
    height: 24px;
  }
`;
