// src/components/ProductDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import './ProductDetails.css'; // Import the CSS file for styling

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${api_url}/${params.productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.productId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-details">
      {product ? <Product product={product} showButton={false} /> : <div className="no-product">No product found</div>}
    </div>
  );
}

export default ProductDetails;
