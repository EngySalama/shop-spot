// src/components/Rating.js
import React, { useState } from 'react';
import './Rating.css'; // Add CSS for styling the rating component

function Rating({ onRate }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleClick = (value) => {
    setRating(value);
    onRate(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // You can handle review submission logic here
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    alert('Review submitted!'); // Replace with actual submission logic
  };

  return (
    <div className="rating">
      <div className="rating-stars">
        <span>Rating: </span>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? 'filled' : ''}`}
            onClick={() => handleClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <p>{rating} Star{rating > 1 ? 's' : ''}</p>
      <div className="comment-box">
        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Add Review
      </button>
    </div>
  );
}

export default Rating;
