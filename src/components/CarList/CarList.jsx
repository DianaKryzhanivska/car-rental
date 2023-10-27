import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/operations';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import {
  AddToFavBtn,
  CarGallery,
  CarItem,
  CarMainInfo,
  CarSecondaryInfo,
  LearnMoreBtn,
  LoadMoreBtn,
} from './CarList.styled';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/useModal';
import SingleCarItem from 'components/SingleCarItem/SingleCarItem';
import sprite from '../../img/sprite.svg';
import { addToFavorites, removeFromFavorites } from 'redux/favorites/slice';
import { selectFavoriteCars } from 'redux/favorites/selectors';
import placeholder from '../../img/placeholder.png';
import Filter from 'components/Filter/Filter';
import { MainContainer } from 'styles/GlobalStyles';
import Loader from 'components/Loader/Loader';

const CarList = () => {
  const { open, close, isOpen, data } = useModal();

  const dispatch = useDispatch();

  const cars = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const limit = 12;

  const [filters, setFilters] = useState({
    selectedBrand: null,
    selectedPrice: null,
    minMileage: '',
    maxMileage: '',
  });

  const [filteredCars, setFilteredCars] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const [filteredData] = useState({
    selectedBrand: null,
    selectedPrice: null,
    minMileage: '',
    maxMileage: '',
  });

  useEffect(() => {
    dispatch(
      fetchAllCars({
        page,
        limit,
        ...filteredData,
      })
    );
  }, [dispatch, page, limit, filteredData]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.selectedBrand ||
        filters.selectedPrice ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredData = cars.filter(car => {
          const makeMatch =
            !filters.selectedBrand ||
            car.make
              .toLowerCase()
              .includes(filters.selectedBrand.toLowerCase());

          const priceMatch =
            !filters.selectedPrice ||
            Number(car.rentalPrice.slice(1)) <= filters.selectedPrice;

          const mileageMatch =
            (!filters.minMileage ||
              car.mileage >= Number(filters.minMileage)) &&
            (!filters.maxMileage || car.mileage <= Number(filters.maxMileage));

          return makeMatch && priceMatch && mileageMatch;
        });
        setFilteredCars(filteredData);
      } else {
        setFilteredCars(cars);
      }
    }
  }, [filters, isFiltering, cars]);

  const favoriteCars = useSelector(selectFavoriteCars);

  const handleAddToFavClick = car => {
    if (isAlreadyInFav(car)) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  const isAlreadyInFav = car => {
    return favoriteCars.some(favCar => favCar.id === car.id);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <MainContainer>
        {isLoading && <Loader />}
        {error && <p>Error happened</p>}
        <Filter
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
        />
        <CarGallery>
          {isFiltering ? (
            filteredCars?.length > 0 ? (
              filteredCars.map(car => {
                const isAlreadyInFav = favoriteCars.some(
                  favCar => favCar.id === car.id
                );

                return (
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
                    <AddToFavBtn
                      type="button"
                      onClick={() => handleAddToFavClick(car)}
                    >
                      {isAlreadyInFav ? (
                        <svg width={18} height={18}>
                          <use href={`${sprite}#heart_active`} />
                        </svg>
                      ) : (
                        <svg width={18} height={18}>
                          <use href={`${sprite}#heart`} />
                        </svg>
                      )}
                    </AddToFavBtn>
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
                );
              })
            ) : (
              <p>No results for this filter</p>
            )
          ) : cars?.length > 0 ? (
            cars.map(car => {
              const isAlreadyInFav = favoriteCars.some(
                favCar => favCar.id === car.id
              );

              return (
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
                  <AddToFavBtn
                    type="button"
                    onClick={() => handleAddToFavClick(car)}
                  >
                    {isAlreadyInFav ? (
                      <svg width={18} height={18}>
                        <use href={`${sprite}#heart_active`} />
                      </svg>
                    ) : (
                      <svg width={18} height={18}>
                        <use href={`${sprite}#heart`} />
                      </svg>
                    )}
                  </AddToFavBtn>
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
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </CarGallery>
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      </MainContainer>
      {isOpen && (
        <Modal close={close}>
          <SingleCarItem carItem={data} close={close} car={data} />
        </Modal>
      )}
    </>
  );
};

export default CarList;
