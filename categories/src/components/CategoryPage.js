// src/components/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css'; // Import the CSS file for styling

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend or API endpoint
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories'); // Adjust the API endpoint as needed
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-header">Shop by Category</h2>
      <div className="category-buttons">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link to={`/products/${category}`} key={category} className="category-button">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
