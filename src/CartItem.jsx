// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
