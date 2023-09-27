import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './AccountBtn.css';
import accountBtnIcon from '../../../../images/account-btn-icon.svg';
import { resources_ru } from '../../../../translations/resources_ru';

const AccountBtn = ({ className }) => {
  
  return (
    <NavLink to='/profile' className={`btn ${className}`}>
      {resources_ru.account}
      <img src={accountBtnIcon} alt={resources_ru.account_btn_icon} className='header__accountBtn__icon'/>
    </NavLink>
  );
};

export default AccountBtn;