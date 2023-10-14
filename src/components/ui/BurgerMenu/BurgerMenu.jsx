import React from 'react';
import './BurgerMenu.css';
import AccountBtn from '../buttons/AccountBtn/AccountBtn';
import crossIcon from '../../../images/icons/cross-icon.svg';
import { resources_ru } from '../../../translations/resources_ru';
import NLink from '../NLink/NLink';

const BurgerMenu = ({ sideBar, setSideBar, navItems }) => {

  const hideSideBar = () => {
    /** Возвращаю скролл страницы при закрытии бокового меню */
    document.querySelector('body').style.removeProperty('overflow');

    setSideBar(false);
  };

  return (
    <nav className={sideBar ? 'side-bar active' : 'side-bar'}>
      <div className={sideBar ? 'side-bar__blackout active' : ''} onClick={hideSideBar} />
      <div className={sideBar ? 'side-bar__menu active' : 'side-bar__menu'}>
        <img src={crossIcon} alt={resources_ru.cross_icon} className={'side-bar__menu-cross'} draggable={false} onClick={hideSideBar} />
        <ul className={'side-bar__menu-items'}>
          {navItems.map((item, index) => 
            <li className={'side-bar__menu-items-item'} key={index}>
              <NLink
                addtlClass={'side-bar__menu-items-item-link'} 
                wayTo={item.wayTo}
                title={item.title}
                onClick={hideSideBar} 
              />
            </li>
          )}
        </ul>
        <AccountBtn 
            addtlClass={'side-bar__menu-account-btn'} 
            isMainPage={false}
            onClick={hideSideBar}
        />
      </div>
    </nav>
  );
};

export default BurgerMenu;
