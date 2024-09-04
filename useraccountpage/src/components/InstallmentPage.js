import React from 'react';
import './InstallmentPage.css';

function InstallmentPage() {
  return (
    <div className="installment-container">
      <div className="installment-card">
        <div className="installment-card-body">
          <h5 className="installment-title">Using Installment for a Purchase</h5>
          <p className="installment-text">
            If you have an eligible card, complete the steps below:
            <ol className="installment-steps">
              <li>Select your payment method page and choose an eligible credit card.</li>
              <li>Choose an EMI plan from the drop-down list.</li>
              <li>Click Continue.</li>
              <li>Review your order and click Place Your Order and Pay.</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InstallmentPage;