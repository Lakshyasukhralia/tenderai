import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default App;
