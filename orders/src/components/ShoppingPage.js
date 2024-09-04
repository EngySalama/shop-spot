
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './ShoppingPage.css';

const ShoppingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="shopping-page-container">
      <h1 className="page-title">Shopping Page</h1>
      <ul className="item-list">
        {products.length > 0 ? (
          products.map((item) => (
            <li key={item.id} className="item">
              <h2>{item.title}</h2>
              <p>Price: ${item.price.toFixed(2)}</p>
              <img src={item.image} alt={item.title} className="item-image" />
              <button 
                className="add-to-cart-button"
                onClick={() => addToCart(item)} 
              >
                Add to Cart
              </button>
            </li>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </ul>
      <Link to="/" className="back-to-main-button">Back to Order Page</Link>
    </div>
  );
};

export default ShoppingPage;
