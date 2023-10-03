import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars }) => {
  return (
    <div className="car-list w-max m-auto grid grid-cols-3 gap-6 my-8">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;