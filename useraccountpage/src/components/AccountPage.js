import React from 'react';
import { Link } from 'react-router-dom';
import './AccountPage.css';

function AccountPage() {
  return (
    <div className="account-page-container">
      <div className="account-header">
        <h1 className="account-title">Your Account</h1>
      </div>
      <div className="account-cards-container">
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Your Payments</h5>
            <p className="card-text">Manage or add payment methods and view your transactions.</p>
            <Link to="/payment" className="custom-btn">Review</Link>
          </div>
        </div>
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Your Address</h5>
            <p className="card-text">Edit, remove or set default address.</p>
            <Link to="/address" className="custom-btn">Review</Link>
          </div>
        </div>
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Installment Plan</h5>
            <p className="card-text">View installment plans offered.</p>
            <Link to="/installment" className="custom-btn">Review</Link>
          </div>
        </div>
        </div>
      </div>
  );
}

export default AccountPage;
