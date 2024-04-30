import React from 'react';
import placeholder from '../../img/placeholder.png';
import {
  CarDescription,
  CarName,
  CarSecondaryInfo,
  CarSubtitle,
  ModalContainer,
  RentText,
  RentWrapper,
  RentalLink,
} from './SingleCarItem.styled';

const SingleCarItem = ({ car }) => {
  const rentalConditions = car.rentalConditions.split('\n');
  const minimumAgeEl = rentalConditions[0];
  const match = minimumAgeEl.match(/\d+/);
  const age = parseInt(match[0], 10);

  const formattedMileage = car.mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <ModalContainer>
        <img
          src={car.img || car.photoLink}
          alt={car.model}
          width={461}
          height={248}
          style={{
            objectFit: 'cover',
            borderRadius: '14px',
            marginBottom: '14px',
          }}
          onError={e => {
            e.currentTarget.src = placeholder;
          }}
        />
        <CarName>
          {`${car.make}`} <span>{car.model}</span>
          {`, ${car.year}`}
        </CarName>
        <div>
          <CarSecondaryInfo>{`Ukraine | ${car.rentalCompany} | ${car.type} | ${car.id}`}</CarSecondaryInfo>
        </div>
        <CarDescription>{car.description}</CarDescription>
        <CarSubtitle>Accessories and functionalities:</CarSubtitle>
        <CarSecondaryInfo
          style={{
            marginBottom: '24px',
            overflowWrap: 'break-word',
          }}
        >
          {car.accessories.join(' | ')}
        </CarSecondaryInfo>
        <CarSubtitle>Rental Conditions:</CarSubtitle>
        <RentWrapper>
          <RentText>
            Minimum age: <span>{age}</span>
          </RentText>
          <RentText>{rentalConditions[1]}</RentText>
          <RentText>{rentalConditions[2]}</RentText>
          <RentText>
            {`Mileage: `} <span>{formattedMileage}</span>
          </RentText>
          <RentText>
            {`Price: `} <span>{car.rentalPrice}</span>
          </RentText>
        </RentWrapper>
        <RentalLink href="tel:+380730000000">Rental car</RentalLink>
      </ModalContainer>
    </>
  );
};

export default SingleCarItem;
