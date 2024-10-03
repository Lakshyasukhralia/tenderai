import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import { GlobalStyles } from './styles/GlobalStyles';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<ListingPage />} />
          <Route path="/tender/:tenderId" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
