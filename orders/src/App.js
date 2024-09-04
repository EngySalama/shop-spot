// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'; // Import MainPage component
import ShoppingPage from './components/ShoppingPage'; // Import ShoppingPage component
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Route for MainPage */}
          <Route path="/" element={<MainPage />} />
          {/* Route for ShoppingPage */}
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
