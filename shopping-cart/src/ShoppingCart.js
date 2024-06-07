// ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCart } from './cartActions';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="shopping-cart">
      <h2>Add Cart</h2>
      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <CartItem item={item} />
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
