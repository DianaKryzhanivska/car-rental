import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  transition: transform 0.3s;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s;
    transform-origin: center center;
    &:hover {
      transform: scale(1.5);
    }
  }

  @media only screen and (max-width: 767px) {
    max-width: 345px;
  }
`;

export const CarName = styled.h2`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33em;
  margin-bottom: 8px;

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const CarSecondaryInfo = styled.p`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 14px;
`;

export const CarDescription = styled.p`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43em;
  margin-bottom: 24px;
`;

export const CarSubtitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43em;
  margin-bottom: 8px;
`;

export const RentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 35px;
  background: ${({ theme }) => theme.colors.modalRentalCondBg};
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.modalRentalCondText};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.24px;

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-weight: 600;
    margin-left: 3px;
  }
`;

export const RentalLink = styled.a`
  padding: 12px 50px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43em;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }
`;
