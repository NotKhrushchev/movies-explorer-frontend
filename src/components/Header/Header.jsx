import React from 'react';
import './Header.css';
import AccountBtn from '../ui/buttons/AccountBtn/AccountBtn';
import { resources_ru } from '../../translations/resources_ru';
import NLink from '../ui/NLink/NLink';
import LoginBtn from '../ui/buttons/LoginBtn/LoginBtn';
import RegBtn from '../ui/buttons/RegBtn/RegBtn';
import { useLocation } from 'react-router-dom';
import Logo from '../ui/Logo/Logo';
import Btn from '../ui/buttons/Btn';
import UserContext from '../../contexts/userContext';

const Header = ({ setSideBar, isVisible }) => {

  const {currentUser} = React.useContext(UserContext);
  const isMainPage = !useLocation().pathname.split('/').pop();
  
  const showSideBar = () => {
    /** Отключаю скролл страницы при открыитии бокового меню */
    document.querySelector('body').style.overflow = 'hidden';
    
    setSideBar(true);
  };

  return (
    <header className={`header ${isMainPage ? 'header_main' : ''} ${!isVisible ? 'hidden' : ''}`}>
      <div className={'header__content'}>
        <Logo addtlClass={'header__logo'} />
        {currentUser
          ?
          <>
            <nav className='header__nav'>
              <NLink 
                addtlClass={'header__nav-link'} 
                wayTo={'/movies'} 
                title={resources_ru.movies} 
                isMainPage={isMainPage} 
              />
              <NLink 
                addtlClass={'header__nav-link'} 
                wayTo={'/saved-movies'} 
                title={resources_ru.saved_movies} 
                isMainPage={isMainPage} 
              />
            </nav>
            <AccountBtn
              addtlClass={'header__account-btn'} 
              isMainPage={isMainPage}
            />
            <Btn
              addtlClass={`header__burger-menu-icon ${isMainPage ? 'header__burger-menu-icon_bright' : 'header__burger-menu-icon_dark'} `}
              ariaLabel={resources_ru.burger_menu_icon}
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
      </div>
    </header>
  );
};

export default Header;