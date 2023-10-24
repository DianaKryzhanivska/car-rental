import React from 'react';
import placeholder from '../../img/placeholder.png';
import { ModalContainer, RentalLink } from './SingleCarItem.styled';

const SingleCarItem = ({ car, close }) => {
  const imgNotFound = 'https://placekitten.com/g/185/280';
  // const imgNotFound = '../../img/placeholder.png';

  return (
    <>
      <ModalContainer>
        <img
          src={car.img || car.photoLink || placeholder}
          alt={car.model}
          width={461}
          height={248}
          style={{ objectFit: 'cover', borderRadius: '12px' }}
          onError={e => {
            e.currentTarget.src = imgNotFound;
          }}
        />
        <h2>
          {`${car.make}`} <span>{car.model}</span>
          {`, ${car.year}`}
        </h2>
        <div>
          <p>{`Ukraine | ${car.rentalCompany} | ${car.type} | ${car.id}`}</p>
        </div>
        <p>{car.description}</p>
        <h3>Accessories and functionalities:</h3>
        <p>{`${car.accessories}`}</p>
        <h3>Rental Conditions:</h3>
        <p>{car.rentalConditions}</p>
        <RentalLink href="https://uk-ua.facebook.com/">Rental car</RentalLink>
      </ModalContainer>
    </>
  );
};

export default SingleCarItem;
