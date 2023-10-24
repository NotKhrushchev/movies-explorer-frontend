import React from 'react';
import './Link.css';

const Link = ({ addtlClass, wayTo, title, isAnchorLink, children }) => {
  
  return (
    <a href={wayTo} className={`link ${addtlClass}`} {...(!isAnchorLink && {target: '_blank', rel:'noreferrer'})}>{title}
      {children}
    </a>
  );
};

export default Link;