import React from 'react';
import './Link.css';

const Link = ({ className, wayTo, title, isAnchorLink, children }) => {
  
  return (
    <a href={wayTo} className={`link ${className}`} {...(!isAnchorLink && {target: '_blank', rel:'noreferrer'})}>{title}
      {children}
    </a>
  );
};

export default Link;