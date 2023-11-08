import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './RegBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const RegBtn = ({ className }) => {
  
  return (
    <NavLink to='/signup' className={`${className} btn`}>
      {resources_ru.register}
    </NavLink>
  );
};

export default RegBtn;