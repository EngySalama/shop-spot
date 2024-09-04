import React, { useState } from 'react';
import './CardInputForm.css';

function CardInputForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Replace with your backend URL
        const response = await fetch('https://your-backend-url.com/api/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const result = await response.json();
        console.log('Form data submitted:', result);
        // Optionally, handle success here (e.g., show a success message)
      } catch (error) {
        console.error('Error:', error);
        // Optionally, handle error here (e.g., show an error message)
      }
    }
  };

  return (
    <div className="card-input-form-container">
      <h2 className="form-title">Add a Payment Method</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter card number"
            className="form-input"
          />
          {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cardName" className="form-label">Cardholder Name</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="Enter cardholder name"
            className="form-input"
          />
          {errors.cardName && <p className="error-text">{errors.cardName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            className="form-input"
          />
          {errors.expiryDate && <p className="error-text">{errors.expiryDate}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
            className="form-input"
          />
          {errors.cvv && <p className="error-text">{errors.cvv}</p>}
        </div>

        <button type="submit" className="btn-submit">Save Payment Method</button>
      </form>
    </div>
  );
}

export default CardInputForm;
