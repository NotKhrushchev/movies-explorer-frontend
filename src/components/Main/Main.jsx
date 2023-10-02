import React from 'react';
import Promo from './Promo/Promo';
import './Main.css';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

const Main = () => {

  const myProjects = [
    {
      title: 'Статичный сайт',
      wayTo: '*'
    },
    {
      title: 'Адаптивный сайт',
      wayTo: '*'
    },
    {
      title: 'Одностраничное приложение',
      wayTo: '*'
    },
  ]

  return (
    <div className={'main'}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe portfolioItems={myProjects} />
    </div>
  );
};

export default Main;