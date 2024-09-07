// src/components/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      async function fetchCategoryItems() {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
          const data = await response.json();
          setCategoryItems(data);
        } catch (error) {
          console.error('Error fetching category items:', error);
        }
      }

      fetchCategoryItems();
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset selected item when category changes
  };

  const handleViewDetailsClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div className="category-container">
      <h2 className="category-header">Shop by Category</h2>
      <div className="category-buttons">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button 
              key={category} 
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
      <div className="category-content">
        {selectedCategory ? (
          <div>
            <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h3>
            <div className="category-items">
              {categoryItems.length > 0 ? (
                categoryItems.map(item => (
                  <div key={item.id} className="category-item">
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <button 
                      className="view-details-button"
                      onClick={() => handleViewDetailsClick(item.id)}
                    >
                      View Details
                    </button>
                  </div>
                ))
              ) : (
                <p>Loading items...</p>
              )}
            </div>
          </div>
        ) : (
          <h3>Select a category to view items.</h3>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;

