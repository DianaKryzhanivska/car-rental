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

const SingleCarItem = ({ car, close }) => {
  const imgNotFound = 'https://placekitten.com/g/185/280';
  // const imgNotFound = '../../img/placeholder.png';

  const rentalConditions = car.rentalConditions.split('\n');

  return (
    <>
      <ModalContainer>
        <img
          src={car.img || car.photoLink || placeholder}
          alt={car.model}
          width={461}
          height={248}
          style={{
            objectFit: 'cover',
            borderRadius: '14px',
            marginBottom: '14px',
          }}
          onError={e => {
            e.currentTarget.src = imgNotFound;
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
        <CarSecondaryInfo style={{ marginBottom: '24px', width: '461px' }}>
          {car.accessories.join(' | ')}
        </CarSecondaryInfo>
        <CarSubtitle>Rental Conditions:</CarSubtitle>
        <RentWrapper>
          {rentalConditions.map((condition, index) => (
            <RentText key={index}>{condition}</RentText>
          ))}
          <RentText>
            {`Mileage: `} <span>{car.mileage}</span>
          </RentText>
          <RentText>
            {`Price: `} <span>{car.rentalPrice}</span>
          </RentText>
        </RentWrapper>
        <RentalLink href="tel:+123456789012">Rental car</RentalLink>
      </ModalContainer>
    </>
  );
};

export default SingleCarItem;
