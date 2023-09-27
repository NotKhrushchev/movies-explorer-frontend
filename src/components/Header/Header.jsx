import React from 'react';
import moviesExplorerLogo from '../../images/logo/movies-explorer-logo.svg';
import './Header.css';
import AccountBtn from '../ui/buttons/AccountBtn/AccountBtn';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/buttons/Link/Link';
import burgerMenuIcon from '../../images/burger-menu-icon.svg';

const Header = () => {

  return (
    <header className={`header header_main`}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} />
      <div className='header__nav'>
        <Link className={'header__nav__link'} wayTo={'/movies'} title={resources_ru.movies}/>
        <Link className={'header__nav__link'} wayTo={'/saved-movies'} title={resources_ru.saved_movies}/>
      </div>
      <AccountBtn className={'header__accountBtn'} />
      <img src={burgerMenuIcon} alt={resources_ru.burger_menu_icon} className={'header__burger-menu-icon'} />
    </header>
  );
};

export default Header;