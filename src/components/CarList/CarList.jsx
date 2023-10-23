import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/operations';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';

const CarList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const cars = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log(cars);

  return (
    <>
      <div>This is CarList</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error happened</p>}
      <ul>
        {cars?.length > 0 ? (
          cars.map(car => <li key={car.id}>{car.model}</li>)
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </>
  );
};

export default CarList;
