// cartReducer.js
const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(i => i.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const updatedCartItems = [...state.cartItems];
        if (updatedCartItems[index].quantity > 1) {
          updatedCartItems[index] = { ...updatedCartItems[index], quantity: updatedCartItems[index].quantity - 1 };
        } else {
          updatedCartItems.splice(index, 1);
        }
        return {
          ...state,
          cartItems: updatedCartItems
        };
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
