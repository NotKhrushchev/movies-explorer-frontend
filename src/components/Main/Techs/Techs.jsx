import React from 'react';
import './Techs.css';
import { resources_ru } from '../../../translations/resources_ru';

const Techs = () => {

  const techs = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB'
  ]
  
  return (
    <section className={'techs'}>
      <div className={'techs__content'}>
        <p className={'techs__header'}>{resources_ru.techs}</p>
        <hr />
        <div className={'techs__info'}>
          <h2 className={'tech__title'}>{resources_ru.seven_techs}</h2>
          <p className={'techs__subtitle'}>{resources_ru.mastered_techs}</p>
        </div>
        <ul className={'techs__list'}>
          {techs.map((tech, index) => (
            <li className={'techs__list__item'} key={index}>{tech}</li>
          ))}
          </ul>
      </div>
    </section>
  );
};

export default Techs;