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
  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: 16px;
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const CarSecondaryInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
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
  color: ${({ theme }) => theme.colors.mainWhite};
  background: ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.hoverBlue};
  }
`;

export const LoadMoreBtn = styled.button`
  height: 24px;
  color: ${({ theme }) => theme.colors.lightBlue};
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
    color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;
