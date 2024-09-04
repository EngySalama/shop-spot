// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/products/:category" element={<ProductsList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
