import React from 'react';
import './Btn.css';

const Btn = ({ addtlClass, onClick, text, ariaLabel, type = 'button' }) => {
  return (
    <button 
      className={`btn ${addtlClass}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
    >
      {text}
    </button>
  );
};

export default Btn;