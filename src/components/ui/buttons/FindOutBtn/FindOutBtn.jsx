import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './FindOutBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const FindOutBtn = ({ btnBEMRelate }) => {
  
  return (
    <NavLink to='#more-info' className={`${btnBEMRelate} btn find-out-btn`}>
      {resources_ru.find_out}
    </NavLink>
  );
};

export default FindOutBtn;