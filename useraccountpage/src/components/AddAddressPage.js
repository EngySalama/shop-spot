import React, { useState } from 'react';
import './AddAddressPage.css';

function AddAddressPage() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://your-api-endpoint.com/saveAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to save address');
      }

      const result = await response.json();
      console.log('Address saved successfully:', result);
      // Optionally, handle the result here, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error saving address:', error);
      // Optionally, show an error message here
    }
  };

  return (
    <div className="add-address-container">
      <h2 className="page-title">Add a New Address</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-input"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="form-label">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Save Address</button>
      </form>
    </div>
  );
}

export default AddAddressPage;
