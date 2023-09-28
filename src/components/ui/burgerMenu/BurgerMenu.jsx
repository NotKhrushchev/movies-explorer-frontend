import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import AccountBtn from '../buttons/AccountBtn/AccountBtn';
import crossIcon from '../../../images/cross-icon.svg';
import { resources_ru } from '../../../translations/resources_ru';

const BurgerMenu = ({ sideBar, setSideBar, navItems, accountBtnRequired }) => {

  const hideSideBar = () => {
    setSideBar(false);
  };

  return (
    <nav className={sideBar ? 'side-bar active' : 'side-bar'}>
      <img src={crossIcon} alt={resources_ru.cross_icon} className={'side-bar__cross'} onClick={hideSideBar}/>
      <ul className="side-bar__items">
        {navItems.map((item, index) => 
          <li className="side-bar__items__item" key={index}>
            <NavLink to={item.wayTo} className={'side-bar__items__item__link'}>{item.title}</NavLink>
          </li>
        )}
      </ul>
      {accountBtnRequired && 
        <AccountBtn 
          btnBEMRelate={'side-bar__account'} 
          iconBEMRelate={'side-bar__account__icon'} 
          isMainPage={false}
        />
      }
    </nav>
  );
};

export default BurgerMenu;