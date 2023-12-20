// src/Product.js or src/Product.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
