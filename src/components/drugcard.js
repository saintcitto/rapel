import React from 'react';

const DrugCard = ({ image, name }) => {
  return (
    <div className="drug-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default DrugCard;