import React from 'react';

const CarCard = ({ car }) => {
  const { name, image, seatingCapacity, engineType, mileage, transmission, rentPerMonth } = car;

  return (
    <div className="car-card w-80 p-4 bg-slate-100 shadow-xl rounded-xl">
      <img src={image} alt={name} className=' w-full h-44 rounded-lg bg-slate-300 object-cover'/>

      <div className="car-details">
        <h3 className=' text-xl my-3'>{name}</h3>

        <div className="feature grid grid-cols-2 text-sm border-b-2 pb-3">
          <p className='flex items-center gap-2'><span className="material-symbols-rounded text-lg text-sky-500">group</span> {seatingCapacity}</p>
          <p className='flex items-center gap-2'><span className="material-symbols-rounded text-lg text-sky-500">local_gas_station</span> {engineType}</p>
          <p className='flex items-center gap-2'><span className="material-symbols-rounded text-lg text-sky-500">swap_driving_apps_wheel</span> {mileage}</p>
          <p className='flex items-center gap-2'><span className="material-symbols-rounded text-lg text-sky-500">auto_transmission</span> {transmission}</p>
        </div>

        <div className="card-bottom flex items-center justify-between mt-3">
          <p className="price text-xl">{rentPerMonth} <span className=' text-sm'>/ month</span></p>

          <div className="buttons flex gap-3">
            <button className='bg-sky-100 py-1 px-2 rounded-xl text-center hover:bg-sky-200'><span className="material-symbols-rounded text-xl text-sky-500">favorite</span></button>
            <button className='bg-blue-400 text-white py-1 px-4 rounded-xl text-center text-sm hover:bg-blue-600'>Rent now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
