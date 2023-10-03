import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarsMain from './CarsMain';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/RentMyDrive/" element={<CarsMain />} />
        <Route path="/RentMyDrive/page/:page" element={<CarsMain />} />
      </Routes>
    </Router>
  );
};

export default App;
