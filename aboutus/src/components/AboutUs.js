import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <section>
        <h2>Our Story</h2>
        <p>
          Welcome to Shop Spot! We started our journey with a simple goal: to provide high-quality products and exceptional customer service. Our mission is to bring you the best products and make your shopping experience as enjoyable and seamless as possible.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          At Shop Spot,  our mission is to make online shopping simple, enjoyable, and accessible for everyone.
        </p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer First:</strong> We prioritize our customers and strive to meet their needs and exceed their expectations.</li>
          <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
          <li><strong>Quality:</strong> We are dedicated to delivering high-quality products and services.</li>
          <li><strong>Innovation:</strong> We continuously seek new and better ways to serve our customers.</li>
        </ul>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <p>
          Our team is made up of passionate and dedicated individuals who work hard to ensure that every aspect of your experience with us is top-notch. We believe in collaboration, creativity, and continuous improvement.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          We love hearing from our customers! If you have any questions, feedback, or just want to say hello, feel free to reach out to us .
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
