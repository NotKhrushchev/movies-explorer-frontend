import React from 'react';
import Promo from './Promo/Promo';
import './Main.css';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <div className={'main'}>
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  );
};

export default Main;