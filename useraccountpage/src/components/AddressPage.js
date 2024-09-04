import React from 'react';
import { Link } from 'react-router-dom';
import './AddressPage.css';

function AddressPage() {
  return (
    <div className="container address-page-container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card address-card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Your Address</h5>
              <p className="card-text">Add a new address to your account.</p>
              <Link to="/add-address" className="custom-btn">Add Address</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
