import { styled } from 'styled-components';

export const CarGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  list-style: none;
`;

export const CarItem = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    transition: transform 0.3s;
  }
`;

export const AddToFavBtn = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  right: 14px;
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
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  /* line-height: 1.5em; */
  display: flex;
  flex-wrap: wrap;
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  margin-top: 28px;
  border-radius: 12px;
  border: none;
  padding: 12px 98px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43em;
  color: #fff;
  background: #3470ff;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const LoadMoreBtn = styled.button`
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
