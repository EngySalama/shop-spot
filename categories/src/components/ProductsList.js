// src/components/ProductsList.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

function ProductsList() {
  const { category } = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = api_url;
        if (category && category !== 'all') {
          url = `${api_url}/category/${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2 className="text-center p-3">Products in {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
