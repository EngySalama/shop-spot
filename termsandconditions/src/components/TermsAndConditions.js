import React from 'react';
import './TermsAndConditions.css'; // Import the CSS file for styling

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-intro">
        Welcome to Shop Spot! These Terms and Conditions govern your use of our website. By accessing or using our site, you agree to comply with and be bound by the following terms:
      </p>
      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our site, you agree to these Terms and Conditions. If you do not agree, please do not use our site.
        </p>
      </section>
      <section className="terms-section">
        <h2>2. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.
        </p>
      </section>
      <section className="terms-section">
        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for your use of our website and for any content you post. You must comply with applicable laws and regulations.
        </p>
      </section>
      <section className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content on our site, including text, graphics, logos, and images, is the property of Shop Spot or its content suppliers and is protected by intellectual property laws.
        </p>
      </section>
      <section className="terms-section">
        <h2>5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages or losses resulting from your use of our site or inability to access it.
        </p>
      </section>
      <section className="terms-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us .
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditions;
