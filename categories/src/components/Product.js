// src/components/Product.js
import { Link } from 'react-router-dom';
import './Product.css'; // Import the CSS file for styling

function Product(props) {
  const { product, showButton } = props;

  return (
    <div className="product-card">
      <img src={product.image} className="product-img" alt={product.title} />
      <div className="product-body">
        <h5 className="product-title">{product.title}</h5>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        {showButton && (
          <Link className="btn-details" to={`/product/${product.id}`}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
