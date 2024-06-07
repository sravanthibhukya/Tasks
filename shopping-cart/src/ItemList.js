import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';
import './ItemList.css';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
            <span className="description">{item.description}</span>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
