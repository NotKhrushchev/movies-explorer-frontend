import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountBtn from '../buttons/AccountBtn/AccountBtn';

const burgerMenu = ({ navItems, accountBtnRequired }) => {
  return (
    <nav className={`burger-menu`}>
      <ul className="burger-menu__items">
        {navItems.map(item => {
          <li className="burger-menu__items__item">
            <NavLink to={item.wayTo} className={'burger-menu__items__item__link'}>{item.title}</NavLink>
          </li>
        })}
      </ul>
      {accountBtnRequired && <AccountBtn btnRelativeClass={'burger-menu__account'} iconRelateClass={'burger-menu__account__icon'}/>}
    </nav>
  );
};

export default burgerMenu;