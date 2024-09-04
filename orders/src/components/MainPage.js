
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 
import './MainPage.css';

const MainPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart } = useCart(); 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };


  const saveCartData = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/saveCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Failed to save cart data');
      }

      const result = await response.json();
      console.log('Cart data saved successfully:', result);
     
    } catch (error) {
      console.error('Error saving cart data:', error);
   
    }
  };

  return (
    <div className="main-page-container">
      <h1 className="page-title">Orders</h1>

     
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <ul className="cart-item-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                </li>
              ))}
            </ul>
            <button onClick={saveCartData} className="save-cart-button">
              Save Cart
            </button>
          </>
        ) : (
          <p className="no-orders-message">You have placed no orders yet!</p>
        )}
      </div>

      {selectedProduct && (
        <div className="product-details-modal">
          <button onClick={handleCloseDetails} className="close-button">X</button>
          <h2>Product Details</h2>
          <p><strong>Title:</strong> {selectedProduct.title}</p>
          <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
          <img src={selectedProduct.image} alt={selectedProduct.title} className="product-detail-image" />
        </div>
      )}

      
      <div className="continue-shopping-container">
        <Link to="/shopping" className="continue-shopping-button">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
