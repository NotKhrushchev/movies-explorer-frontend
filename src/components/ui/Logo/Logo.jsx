import React from 'react';
import { NavLink } from 'react-router-dom';
import moviesExplorerLogo from '../../../images/logo/movies-explorer-logo.svg';
import { resources_ru } from '../../../translations/resources_ru';


const Logo = ({ addtlClass }) => {
  return (
    <NavLink to={'/'} className={addtlClass}>
      <img src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} draggable={false} className={'logo'} />
    </NavLink>
  );
};

export default Logo;