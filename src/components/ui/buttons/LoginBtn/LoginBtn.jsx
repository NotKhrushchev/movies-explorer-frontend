import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './LoginBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const LoginBtn = ({ className }) => {
  
  return (
    <NavLink to='/signin' className={`${className} btn`}>
      {resources_ru.login}
    </NavLink>
  );
};

export default LoginBtn;