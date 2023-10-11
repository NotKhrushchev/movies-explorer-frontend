import React from 'react';
import moviesExplorerLogo from '../../images/logo/movies-explorer-logo.svg';
import './Header.css';
import AccountBtn from '../ui/buttons/AccountBtn/AccountBtn';
import { resources_ru } from '../../translations/resources_ru';
import NLink from '../ui/NLink/NLink';
import burgerMenuIconBright from '../../images/icons/burger-menu-icon-bright.svg';
import burgerMenuIconDark from '../../images/icons/burger-menu-icon-dark.svg';
import LoginBtn from '../ui/buttons/LoginBtn/LoginBtn';
import RegBtn from '../ui/buttons/RegBtn/RegBtn';
import { useLocation } from 'react-router-dom';

const Header = ({ loggedIn = true, setSideBar }) => {

  const isMainPage = !useLocation().pathname.split('/').pop();

  const showSideBar = () => {
    /** Отключаю скролл страницы при открыитии бокового меню */
    document.querySelector('body').style.overflow = 'hidden';
    
    setSideBar(true);
  };

  return (
    <header className={`header ${isMainPage && 'header_main'}`}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} draggable={false} className={'header__logo'} />
      {loggedIn === true
        ?
        <>
          <nav className='header__nav'>
            <NLink 
              addtlClass={'header__nav__link'} 
              wayTo={'/movies'} 
              title={resources_ru.movies} 
              isMainPage={isMainPage} 
            />
            <NLink 
              addtlClass={'header__nav__link'} 
              wayTo={'/saved-movies'} 
              title={resources_ru.saved_movies} 
              isMainPage={isMainPage} 
            />
          </nav>
          <AccountBtn
            addtlClass={'header__account-btn'} 
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
            <RegBtn addtlClass={'header__reg-btn'} />
            <LoginBtn addtlClass={'header__login-btn'} />
          </nav>
        </>
      }
    </header>
  );
};

export default Header;