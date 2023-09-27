import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css'

const Link = ({ linkBEMRelate, wayTo, title, isMainPage }) => {
  
  return (
    <NavLink to={wayTo} className={`${linkBEMRelate} link ${isMainPage && 'link_main'}`}>{title}</NavLink>
  );
};

export default Link;