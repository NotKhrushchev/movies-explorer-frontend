import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './LoginBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const LoginBtn = ({ btnBEMRelate }) => {
  
  return (
    <NavLink to='/signin' className={`${btnBEMRelate} btn login-btn`}>
      {resources_ru.login}
    </NavLink>
  );
};

export default LoginBtn;