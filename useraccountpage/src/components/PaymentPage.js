import React from 'react';
import { Link } from 'react-router-dom';

import './PaymentPage.css';

function PaymentPage() {
  return (
    <div className="payment-page-container">
      <div className="payment-header">
        <h1 className="page-title">Your Payment Methods</h1>
        <p className="page-subtitle">Manage and add your payment methods here.</p>
      </div>
      <div className="payment-content">
        <div className="payment-card">
          <div className="card-body">
            <h5 className="card-title">No Payment Methods Saved</h5>
            <Link to="/add-payment" className="add-payment-btn">Add a Payment Method</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;