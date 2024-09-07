// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ItemDetailsPage from './components/ItemDetailsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
