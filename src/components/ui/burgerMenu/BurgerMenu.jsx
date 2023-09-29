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
      <div className={sideBar ? 'side-bar__blackout active' : 'side-bar'} />
      <div className={sideBar ? 'side-bar__menu active' : 'side-bar__menu'}>
        <img src={crossIcon} alt={resources_ru.cross_icon} className={'side-bar__menu__cross'} draggable={false} onClick={hideSideBar} />
        <ul className={'side-bar__menu__items'}>
          {navItems.map((item, index) => 
            <li className="side-bar__menu__items__item" key={index}>
              <NavLink to={item.wayTo} className={'side-bar__menu__items__item__link'}>{item.title}</NavLink>
            </li>
          )}
        </ul>
        {accountBtnRequired && 
          <AccountBtn 
            btnBEMRelate={'side-bar__menu__account-btn'} 
            iconBEMRelate={'side-bar__menu__account-btn__icon'} 
            isMainPage={false}
          />
        }
      </div>
    </nav>
  );
};

export default BurgerMenu;