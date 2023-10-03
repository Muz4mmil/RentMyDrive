import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarsMain from './CarsMain';

const App = () => {
  return (
    <Router basename="/RentMyDrive">
      <Routes>
        <Route path="/" element={<CarsMain />} />
        <Route path="/page/:page" element={<CarsMain />} />
      </Routes>
    </Router>
  );
};

export default App;
