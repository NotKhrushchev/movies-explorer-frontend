import React from 'react';
import { NavLink } from 'react-router-dom';
import moviesExplorerLogo from '../../../images/logo/movies-explorer-logo.svg';
import { resources_ru } from '../../../translations/resources_ru';


const Logo = ({ className }) => {
  return (
    <NavLink to={'/'} className={className}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} draggable={false} className={'logo'} />
    </NavLink>
  );
};

export default Logo;