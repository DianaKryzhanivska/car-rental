import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import mercedes from '../../src/img/mercedes.png';
import { styled } from 'styled-components';
import { MainContainer } from 'styles/GlobalStyles';
import { NavLink } from 'react-router-dom';
import { MdDoneOutline } from 'react-icons/md';

const Home = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Title>
          Enjoy driving with <span>Car Rental</span>
        </Title>
        <HeroWrapper>
          <InfoBox>
            <TextList>
              <TextItem>
                <MdDoneOutline />
                <p>Modern car rental service via smartphone</p>
              </TextItem>
              <TextItem>
                <MdDoneOutline />
                <p>It's 30% cheaper than a taxi</p>
              </TextItem>
              <TextItem>
                <MdDoneOutline />
                <p>New comfortable cars with full insurance</p>
              </TextItem>
              <TextItem>
                <MdDoneOutline />
                <p>Rent for an hour, a day, a month</p>
              </TextItem>
              <TextItem>
                <MdDoneOutline />
                <p>A wide selection of cars for any request and budget</p>
              </TextItem>
            </TextList>
            <LinkBox>
              <NavLinkStyled to="/catalog">Choose a car</NavLinkStyled>
              <RentLink href="tel:+380730000000">Rent now</RentLink>
            </LinkBox>
          </InfoBox>
          <CarWrapper>
            <img src={mercedes} alt="mercedes" />
          </CarWrapper>
        </HeroWrapper>
      </MainContainer>
    </>
  );
};

export default Home;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 50px;

  span {
    color: ${({ theme }) => theme.colors.hoverBlue};
    font-weight: bold;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.43em;
`;

export const TextItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CarWrapper = styled.div`
  width: 700px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 14px 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.lightBlue};
  width: 110px;
  margin-top: 50px;

  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 1.43em;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 20px;
`;

export const RentLink = styled.a`
  height: 20px;
  padding: 12px 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 14px;
  font-weight: 800;
  line-height: 1.43em;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
