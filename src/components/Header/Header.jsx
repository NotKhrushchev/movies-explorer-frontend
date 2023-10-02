import React from 'react';
import moviesExplorerLogo from '../../images/logo/movies-explorer-logo.svg';
import './Header.css';
import AccountBtn from '../ui/buttons/AccountBtn/AccountBtn';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/buttons/Link/Link';
import burgerMenuIconBright from '../../images/icons/burger-menu-icon-bright.svg';
import burgerMenuIconDark from '../../images/icons/burger-menu-icon-dark.svg';
import LoginBtn from '../ui/buttons/LoginBtn/LoginBtn';
import RegBtn from '../ui/buttons/RegBtn/RegBtn';

const Header = ({ loggedIn = true, setSideBar }) => {

  const showSideBar = () => {
    setSideBar(true);
  };

  const isMainPage = true;

  return (
    <header className={`header ${isMainPage && 'header_main'}`}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} draggable={false} />
      {loggedIn === true
        ?
        <>
          <nav className='header__nav'>
            <Link 
              linkBEMRelate={'header__nav__link'} 
              wayTo={'/movies'} 
              title={resources_ru.movies} 
              isMainPage={isMainPage} 
            />
            <Link 
              linkBEMRelate={'header__nav__link'} 
              wayTo={'/saved-movies'} 
              title={resources_ru.saved_movies} 
              isMainPage={isMainPage} 
            />
          </nav>
          <AccountBtn
            btnBEMRelate={'header__account-btn'} 
            iconBEMRelate={'header__account-btn__icon'} 
            isMainPage={isMainPage}
          />
          <img 
            src={isMainPage ? burgerMenuIconBright : burgerMenuIconDark} 
            alt={resources_ru.burger_menu_icon} 
            className={'header__burger-menu-icon'}
            draggable={false}
            onClick={showSideBar}
          />
        </>
        :
        <>
          <nav className={'header__auth-nav'}>
            <RegBtn btnBEMRelate={'header__auth-nav__reg-btn'} />
            <LoginBtn btnBEMRelate={'header__auth-nav__login-btn'} />
          </nav>
        </>
      }
    </header>
  );
};

export default Header;