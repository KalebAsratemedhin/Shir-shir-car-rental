import React from 'react';
import './Error.css';

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message || 'Something went wrong. Please try again.'}</p>
    </div>
  );
};

export default Error;
