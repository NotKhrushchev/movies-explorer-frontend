import React from 'react';
import moviesExplorerLogo from '../../images/logo/movies-explorer-logo.svg';
import './Header.css';
import AccountBtn from '../ui/buttons/AccountBtn/AccountBtn';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/buttons/Link/Link';
import burgerMenuIconBright from '../../images/burger-menu-icon-bright.svg';
import burgerMenuIconDark from '../../images/burger-menu-icon-dark.svg';

const Header = () => {

  const isMainPage = false

  return (
    <header className={`header ${isMainPage && 'header_main'}`}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} />
      <div className='header__nav'>
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
      </div>
      <AccountBtn
        btnBEMRelate={'header__account-btn'} 
        iconBEMRelate={'header__account-btn__icon'} 
        isMainPage={isMainPage}
      />
      <img 
        src={isMainPage ? burgerMenuIconBright : burgerMenuIconDark} 
        alt={resources_ru.burger_menu_icon} 
        className={'header__burger-menu-icon'} 
      />
    </header>
  );
};

export default Header;