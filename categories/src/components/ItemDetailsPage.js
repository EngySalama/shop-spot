import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import './ItemDetailsPage.css';

function ItemDetailsPage() {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [rating, setRating] = useState(0);

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

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log('Rating submitted:', newRating);
  };

  return (
    <div className="item-details-page">
      {itemDetails ? (
        <div>
          <button className="close-button" onClick={() => window.history.back()}>Back</button>
          <h1>{itemDetails.title}</h1>
          <img src={itemDetails.image} alt={itemDetails.title} />
          <p>{itemDetails.description}</p>
          <p>${itemDetails.price}</p>
          <Rating onRate={handleRating} />
        </div>
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
}

export default ItemDetailsPage;
