import React from 'react';
import { NavLink } from 'react-router-dom';
import './NLink.css';

const NLink = ({ className, wayTo, title, isMainPage, onClick }) => {
  
  return (
    <NavLink to={wayTo} className={`nlink ${className} ${isMainPage && 'nlink_main'}`} onClick={onClick}>{title}</NavLink>
  );
};

export default NLink;