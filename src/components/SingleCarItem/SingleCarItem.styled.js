import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px;
`;

export const CarName = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33em;
  margin-bottom: 8px;

  span {
    color: #3470ff;
  }
`;

export const CarSecondaryInfo = styled.p`
  width: 277px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 14px;
`;

export const CarDescription = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43em;
  margin-bottom: 24px;
`;

export const CarSubtitle = styled.h3`
  color: #121417;
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
  background: #f9f9f9;
  white-space: nowrap;

  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.24px;

  span {
    color: #3470ff;
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
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43em;
`;
