import { styled } from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FilterSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.filterSubtitle};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29em;
`;

export const BrandsWrapper = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const PriceWrapper = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const MileageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputBox = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const InputFrom = styled.input`
  max-width: 160px;
  box-sizing: border-box;
  padding: 14px 24px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: ${({ theme }) => theme.colors.backgroundGray};

  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11em;

  @media only screen and (max-width: 1439px) {
    width: 100px;
  }

  @media only screen and (max-width: 767px) {
    flex: 1;
    width: auto;
    max-width: 140px;
  }

  @media only screen and (max-width: 374px) {
    max-width: 120px;
  }
`;

export const InputTo = styled.input`
  max-width: 160px;
  box-sizing: border-box;
  padding: 14px 24px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: ${({ theme }) => theme.colors.backgroundGray};

  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11em;

  @media only screen and (max-width: 1439px) {
    width: 100px;
  }

  @media only screen and (max-width: 767px) {
    flex: 1;
    width: auto;
    max-width: 140px;
  }

  @media only screen and (max-width: 374px) {
    max-width: 120px;
  }
`;

export const SearchBtn = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
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
