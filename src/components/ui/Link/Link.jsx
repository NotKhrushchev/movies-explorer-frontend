import React from 'react';
import './Link.css';

const Link = ({ addtlClass, wayTo, title, isAnchorLink }) => {
  
  return (
    <a href={wayTo} className={`link ${addtlClass}`} {...(!isAnchorLink && {target: '_blank', rel:'noreferrer'})}>{title}</a>
  );
};

export default Link;