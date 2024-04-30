import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import mercedes from '../../img/mercedes.png';
import { MainContainer } from 'styles/GlobalStyles';
import { MdDoneOutline } from 'react-icons/md';
import {
  CarWrapper,
  HeroWrapper,
  InfoBox,
  LinkBox,
  NavLinkStyled,
  RentLink,
  TextItem,
  TextList,
  Title,
} from './Home.styled';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
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
          {isTabletOrDesktop && (
            <CarWrapper>
              <img src={mercedes} alt="mercedes" />
            </CarWrapper>
          )}
        </HeroWrapper>
      </MainContainer>
    </>
  );
};

export default Home;
