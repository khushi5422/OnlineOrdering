import React from 'react';

interface ItemCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="row no-gutters">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">${price}</small></p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between align-items-center align-items-md-center">
            <img
              src={imageUrl}
              className="card-img"
              alt="Item"
              style={{ maxWidth: '30%', height: 'auto', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}
            />
            <button className="btn btn-primary mt-2 mt-md-0 rounded-0">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
