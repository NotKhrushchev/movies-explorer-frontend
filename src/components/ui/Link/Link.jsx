import React from 'react';
import './Link.css';

const Link = ({ addtlClass, wayTo, title }) => {
  
  return (
    <a href={wayTo} className={`link ${addtlClass}`} target={'_blank'} rel={'noreferrer'}>{title}</a>
  );
};

export default Link;