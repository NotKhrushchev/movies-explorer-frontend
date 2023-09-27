import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css'

const Link = ({ className, wayTo, title }) => {
  
  return (
    <NavLink to={wayTo} className={`link ${className}`}>{title}</NavLink>
  );
};

export default Link;