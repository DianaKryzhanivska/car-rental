import FavoritesList from 'components/FavoritesList/FavoritesList';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { MainContainer } from 'styles/GlobalStyles';

const Favorites = () => {
  return (
    <>
      <MainContainer>
        <NavBar />
        <FavoritesList />
      </MainContainer>
    </>
  );
};

export default Favorites;
