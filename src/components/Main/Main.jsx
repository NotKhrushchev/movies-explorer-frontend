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
      wayTo: 'https://github.com/NotKhrushchev/how-to-learn'
    },
    {
      title: 'Адаптивный сайт',
      wayTo: 'https://github.com/NotKhrushchev/russian-travel'
    },
    {
      title: 'Одностраничное приложение',
      wayTo: 'https://github.com/NotKhrushchev/react-mesto-api-full-gha'
    },
  ]

  return (
    <main className={'main'}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe portfolioItems={myProjects} />
    </main>
  );
};

export default Main;