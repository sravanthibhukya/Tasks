import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
        <span className="quantity">Quantity: {item.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
