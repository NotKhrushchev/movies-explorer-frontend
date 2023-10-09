import React from 'react';
import { NavLink } from 'react-router-dom';
import './NLink.css';

const NLink = ({ addtlClass, wayTo, title, isMainPage, onClick }) => {
  
  return (
    <NavLink to={wayTo} className={`nlink ${addtlClass} ${isMainPage && 'nlink_main'}`} onClick={onClick}>{title}</NavLink>
  );
};

export default NLink;