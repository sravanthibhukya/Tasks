// cartActions.js
export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId
  };
};

export const updateCart = (cartItems) => {
  return {
    type: 'UPDATE_CART',
    payload: cartItems
  };
};
