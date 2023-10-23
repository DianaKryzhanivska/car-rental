import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/operations';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import {
  CarGallery,
  CarItem,
  CarMainInfo,
  CarSecondaryInfo,
  LearnMoreBtn,
  LoadMoreBtn,
} from './CarList.styled';

const CarList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const cars = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const imgNotFound = 'https://placekitten.com/g/185/280';

  return (
    <>
      <div>This is CarList</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error happened</p>}
      <CarGallery>
        {cars?.length > 0 ? (
          cars.map(car => (
            <CarItem key={car.id}>
              <img
                src={car.img}
                alt={car.model}
                width={274}
                height={268}
                style={{
                  objectFit: 'cover',
                  borderRadius: '14px',
                  marginBottom: '14px',
                }}
                onError={e => {
                  e.currentTarget.src = imgNotFound;
                }}
              />
              <CarMainInfo>
                <p>
                  {`${car.make}`} <span>{car.model}</span> {`${car.year}`}
                </p>
                <p>{car.rentalPrice}</p>
              </CarMainInfo>
              <CarSecondaryInfo>
                <p>{`Ukraine ${car.rentalCompany} | ${car.type} | ${car.id}`}</p>
              </CarSecondaryInfo>
              <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
            </CarItem>
          ))
        ) : (
          <p>No data available</p>
        )}
      </CarGallery>
      <LoadMoreBtn type="button">Load more</LoadMoreBtn>
    </>
  );
};

export default CarList;
