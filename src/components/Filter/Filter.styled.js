import { styled } from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;

export const FilterSubtitle = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29em;
`;

export const BrandsWrapper = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PriceWrapper = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MileageWrapper = styled.div`
  /* width: 320px; */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputFrom = styled.input`
  max-width: 160px;
  padding: 14px 24px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11em;
`;

export const InputTo = styled.input`
  max-width: 160px;
  padding: 14px 24px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11em;
`;

export const SearchBtn = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43em;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background: #0b44cd;
    transform: scale(1.1);
  }
`;
