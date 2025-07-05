import React from 'react';

const TreatmentCard = ({ title, purpose, conditions, therapies, goal }) => {
  return (
    <div className="treatment-card-item">
      {title && <h3>{title}</h3>}
      {purpose && <p><strong>Purpose:</strong> {purpose}</p>}
      {conditions && <p><strong>Treatment Conditions:</strong> {conditions}</p>}
      {therapies && <p><strong>Therapies:</strong> {therapies}</p>}
      {goal && <p><strong>Goal:</strong> {goal}</p>}
    </div>
  );
};

export default TreatmentCard;