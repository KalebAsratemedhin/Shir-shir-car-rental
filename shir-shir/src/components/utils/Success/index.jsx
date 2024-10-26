import React from 'react';
import './Success.css';

const Success = ({ message }) => {
  return (
    <div className="success-container">
      <p className="success-message">{message || 'Action completed successfully!'}</p>
    </div>
  );
};

export default Success;
