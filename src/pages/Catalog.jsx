import CarList from 'components/CarList/CarList';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { MainContainer } from 'styles/GlobalStyles';

const Catalog = () => {
  return (
    <>
      <MainContainer>
        <NavBar />
        <CarList />
      </MainContainer>
    </>
  );
};

export default Catalog;
