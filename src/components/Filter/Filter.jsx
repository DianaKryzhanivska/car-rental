import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import {
  BrandsWrapper,
  FilterSubtitle,
  FilterWrapper,
  InputBox,
  InputFrom,
  InputTo,
  MileageWrapper,
  PriceWrapper,
  SearchBtn,
} from './Filter.styled';

const customStyles = {
  control: provided => ({
    ...provided,
    height: '48px',
    background: '#F7F7FB',
    border: 'none',
    borderRadius: '14px',
  }),
};

const Filter = ({ onFilterChange }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);

  const carBrands = [
    { value: 'Aston Martin', label: 'Aston Martin' },
    { value: 'Audi', label: 'Audi' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Buick', label: 'Buick' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'GMC', label: 'GMC' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Land', label: 'Land' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Volvo', label: 'Volvo' },
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
            ref={selectRef}
            value={selectedBrand}
            onChange={setSelectedBrand}
            options={carBrands}
            placeholder="Enter the text"
            styles={customStyles}
          />
        </BrandsWrapper>
        <PriceWrapper>
          <FilterSubtitle>Price/ 1 hour</FilterSubtitle>
          <Select
            value={selectedPrice}
            onChange={setSelectedPrice}
            options={carPrices}
            placeholder="To $"
            styles={customStyles}
          />
        </PriceWrapper>
        <MileageWrapper>
          <FilterSubtitle>Сar mileage / km</FilterSubtitle>
          <InputBox>
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
          </InputBox>
        </MileageWrapper>
        <SearchBtn type="submit">Search</SearchBtn>
      </FilterWrapper>
    </form>
  );
};

export default Filter;
