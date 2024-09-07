// src/components/ItemDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailsPage.css'; // Add CSS styling for this component

function ItemDetailsPage() {
  const { id } = useParams(); // Get the item ID from the URL
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    async function fetchItemDetails() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    }

    fetchItemDetails();
  }, [id]);

  return (
    <div className="item-details-page">
      {itemDetails ? (
        <div>
          <button className="close-button" onClick={() => window.history.back()}>Back</button>
          <h1>{itemDetails.title}</h1>
          <img src={itemDetails.image} alt={itemDetails.title} />
          <p>{itemDetails.description}</p>
          <p>${itemDetails.price}</p>
        </div>
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
}

export default ItemDetailsPage;
