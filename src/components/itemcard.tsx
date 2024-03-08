// ItemCard.tsx
import React, { useState } from 'react';
import { useCart } from './CartContext';

interface ItemCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, description, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ name, quantity });
    setQuantity(1);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="row no-gutters">
          <div className="col-md-9 col-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">₹ {price}</small></p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex flex-column align-items-center align-items-md-center p-2">
            <img
              src={imageUrl}
              className="card-img"
              alt="Item"
              style={{ maxWidth: '40%', height: 'auto', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-secondary btn-sm m-1 rounded-0" onClick={decrementQuantity}>-</button>
              <span className="m-1">{quantity}</span>
              <button className="btn btn-secondary btn-sm m-1 rounded-0" onClick={incrementQuantity}>+</button>
            </div>
            <button className="btn btn-primary mt-2 mt-md-0 rounded-0" onClick={handleAddToCart}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
