import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Btn.css';
import './AccountBtn.css';
import accountBtnIcon from '../../../../images/icons/account-btn-icon.svg';
import { resources_ru } from '../../../../translations/resources_ru';

const AccountBtn = ({ additionalClass, isMainPage }) => {
  
  return (
    <NavLink to='/profile' className={`${additionalClass} btn account-btn ${isMainPage && 'account-btn_main'}`}>
      {resources_ru.account}
      <img src={accountBtnIcon} alt={resources_ru.account_btn_icon} className={'account-btn__icon'} draggable={false} />
    </NavLink>
  );
};

export default AccountBtn;