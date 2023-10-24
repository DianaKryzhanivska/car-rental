import { styled } from 'styled-components';

export const CarGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  list-style: none;
`;

export const CarItem = styled.li`
  width: 274px;
  height: 426px;
  border: 1px solid gray;
`;

export const CarMainInfo = styled.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  padding-right: 9px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  /* line-height: 1.5; */

  span {
    color: #3470ff;
  }
`;

export const CarSecondaryInfo = styled.p`
  /* height: 40px; */
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  /* line-height: 1.5em; */
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  border-radius: 12px;
  border: none;
  padding: 12px 98px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43em;
  color: #fff;
  background: #3470ff;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const LoadMoreBtn = styled.button`
  /* width: 79px; */
  height: 24px;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  text-decoration-line: underline;
  margin-top: 100px;
  margin-bottom: 150px;

  margin-left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
