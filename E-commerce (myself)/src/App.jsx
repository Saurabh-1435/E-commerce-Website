import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductPage from './components/ProductPage';
import ItemPage from './components/ItemPage';
import TrendReport from './components/TrendReport';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';








import './App.css';

const App = () => {
  return (
    <>
       <Navbar /> 
      <Banner />
      <CategoryPage/>
      <ProductPage /> *
       <ItemPage /> 
      <TrendReport /> 
      <Footer/>
    </>
  );
};

export default App;
