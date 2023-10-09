import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './RegBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const RegBtn = ({ addtlClass }) => {
  
  return (
    <NavLink to='/signup' className={`${addtlClass} btn reg-btn`}>
      {resources_ru.registration}
    </NavLink>
  );
};

export default RegBtn;