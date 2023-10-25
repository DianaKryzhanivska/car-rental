import React, { useState } from 'react';
import Select from 'react-select';
import {
  BrandsWrapper,
  FilterSubtitle,
  FilterWrapper,
  InputFrom,
  InputTo,
  MileageWrapper,
  PriceWrapper,
  SearchBtn,
} from './Filter.styled';

const Filter = ({ onFilterChange }) => {
  const carBrands = [
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Aston Martin', label: 'Aston Martin' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Land', label: 'Land' },
  ];

  const carPrices = [];

  for (let value = 30; value <= 500; value += 10) {
    carPrices.push({ value: value.toString(), label: value.toString() });
  }

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleFilterSubmit = e => {
    e.preventDefault();

    const filteredData = {
      selectedBrand: selectedBrand ? selectedBrand.value : null,
      selectedPrice: selectedPrice ? selectedPrice.value : null,
      minMileage,
      maxMileage,
    };

    console.log(filteredData);

    onFilterChange(filteredData);

    setSelectedBrand(null);
    setSelectedPrice(null);
    setMinMileage('');
    setMaxMileage('');
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <FilterWrapper>
        <BrandsWrapper>
          <FilterSubtitle>Car brand</FilterSubtitle>
          <Select
            value={selectedBrand}
            onChange={setSelectedBrand}
            options={carBrands}
            placeholder="Enter the text"
          />
        </BrandsWrapper>
        <PriceWrapper>
          <FilterSubtitle>Price/ 1 hour</FilterSubtitle>
          <Select
            value={selectedPrice}
            onChange={setSelectedPrice}
            options={carPrices}
            placeholder="To $"
          />
        </PriceWrapper>
        <MileageWrapper>
          <FilterSubtitle>Сar mileage / km</FilterSubtitle>
          <div>
            <InputFrom
              placeholder="From"
              value={minMileage}
              onChange={e => setMinMileage(e.target.value)}
            />
            <InputTo
              placeholder="To"
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value)}
            />
          </div>
        </MileageWrapper>
        <SearchBtn type="submit">Search</SearchBtn>
      </FilterWrapper>
    </form>
  );
};

export default Filter;
