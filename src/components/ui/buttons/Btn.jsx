import React from 'react';
import './Btn.css';

const Btn = ({ className, onClick, text, ariaLabel, type = 'button', disabled }) => {
  return (
    <button 
      className={`btn ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Btn;