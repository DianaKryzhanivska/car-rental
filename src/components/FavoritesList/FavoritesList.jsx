import {
  CarGallery,
  CarItem,
  CarMainInfo,
  CarSecondaryInfo,
  LearnMoreBtn,
} from 'components/CarList/CarList.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/favorites/selectors';
import { removeFromFavorites } from 'redux/favorites/slice';
import sprite from '../../img/sprite.svg';
import {
  NoFavText,
  RemoveFromFavBtn,
  StyledMainContainer,
} from './FavoritesList.styled';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import SingleCarItem from 'components/SingleCarItem/SingleCarItem';
import placeholder from '../../img/placeholder.png';
import { toast } from 'react-toastify';
import { NavLinkStyled } from '../Home/Home.styled';

const FavoritesList = () => {
  const { open, close, isOpen, data } = useModal();
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const handleRemoveFromFav = carId => {
    toast.error('The car removed from favorites');
    dispatch(removeFromFavorites(carId));
  };

  return (
    <StyledMainContainer>
      <CarGallery>
        {favoriteCars?.length > 0 ? (
          favoriteCars.map(car => (
            <CarItem key={car.id}>
              <img
                src={car.img || car.photoLink}
                alt={car.model}
                width={274}
                height={268}
                style={{
                  objectFit: 'cover',
                  borderRadius: '14px',
                  marginBottom: '14px',
                }}
                onError={e => {
                  e.currentTarget.src = placeholder;
                }}
              />
              <RemoveFromFavBtn
                type="button"
                onClick={() => handleRemoveFromFav(car.id)}
              >
                <svg width={18} height={18}>
                  <use href={`${sprite}#heart_active`} />
                </svg>
              </RemoveFromFavBtn>
              <CarMainInfo>
                <p>
                  {`${car.make}`} <span>{car.model}</span> {`${car.year}`}
                </p>
                <p>{car.rentalPrice}</p>
              </CarMainInfo>

              <CarSecondaryInfo>{`${car.address.split(', ')[1]} | ${
                car.address.split(', ')[2]
              } | ${car.rentalCompany} | ${car.type} | ${car.model} | ${
                car.id
              } | ${car.functionalities[0]}`}</CarSecondaryInfo>

              <LearnMoreBtn type="button" onClick={() => open(car)}>
                Learn more
              </LearnMoreBtn>
            </CarItem>
          ))
        ) : (
          <NoFavText>
            You have not added any cars to your favorites yet. Let's{' '}
            <NavLinkStyled to="/catalog">choose!</NavLinkStyled>
          </NoFavText>
        )}
      </CarGallery>
      {isOpen && (
        <Modal close={close}>
          <SingleCarItem carItem={data} close={close} car={data} />
        </Modal>
      )}
    </StyledMainContainer>
  );
};

export default FavoritesList;
