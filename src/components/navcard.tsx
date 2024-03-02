import React from 'react';

interface CardProps {
  image: string;
  text: string;
  onClick: () => void; // Add onClick prop
}

const ResponsiveCard: React.FC<CardProps> = ({ image, text, onClick }) => {
  return (
    <div className="container mt-3"   onClick={onClick}> {/* Add onClick handler to the container */}
      <div className="card shadow-sm border-0 rounded" style={{ width: '150px' }}>
        <div className="card-body text-center">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={image}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
          </div>
          <h5 className="card-title">{text}</h5>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
