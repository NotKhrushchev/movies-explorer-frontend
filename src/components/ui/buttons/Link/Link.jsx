import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

const Link = ({ linkBEMRelate, wayTo, title, isMainPage, onClick }) => {
  
  return (
    <NavLink to={wayTo} className={`link ${linkBEMRelate} ${isMainPage && 'link_main'}`} onClick={onClick}>{title}</NavLink>
  );
};

export default Link;