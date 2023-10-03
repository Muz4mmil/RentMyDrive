import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import carsInfo from './CarsData.json'

const carsData = carsInfo;

const CarsMain = () => {
    const [cars, setCars] = useState([]);
    const { page } = useParams();
    const navigate = useNavigate();
  
    const carsPerPage = 6;
    const currentPage = page ? parseInt(page, 10) : 1;
    const totalPages = Math.ceil(carsData.length / carsPerPage);
  
    const handlePageChange = (newPage) => {
      navigate(`/page/${newPage}`);
  
      const startIndex = (newPage - 1) * carsPerPage;
      const endIndex = startIndex + carsPerPage;
      setCars(carsData.slice(startIndex, endIndex));
    };
  
    useEffect(() => {
      const startIndex = (currentPage - 1) * carsPerPage;
      const endIndex = startIndex + carsPerPage;
      setCars(carsData.slice(startIndex, endIndex));
    }, [currentPage]);
  
    return (
      <div className="app py-4 bg-slate-200">
      <div className='m-auto w-max'>
        <h1 className=' text-4xl font-extrabold text-slate-800 mb-6 mt-3'>RentMyDrive</h1>

        <div className="nav bg-slate-100 shadow-sm rounded-xl m-auto p-3">
          <input type="search" name="" id="" placeholder='Search' className='p-1 px-4 mx-2 rounded-lg'/>

          <select name="Relevance" id="" className='mx-2 bg-transparent'>
            <option value="Relevance">Relevance</option>
          </select>
          <select name="Relevance" id="" className=' bg-transparent'>
            <option value="Relevance">All brands</option>
          </select>

        </div>

        <CarList cars={cars} />

        <div className="page-bottom flex items-center justify-between p-4 rounded-2xl shadow-2xl">
          <p>{currentPage * carsPerPage - carsPerPage + 1} to {currentPage * carsPerPage} from {carsData.length}</p>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

        </div>
      </div>
      </div>
    );
};

export default CarsMain;
