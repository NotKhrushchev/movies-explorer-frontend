import React from 'react';
import './Techs.css'
import { resources_ru } from '../../../translations/resources_ru';

const Techs = () => {
  return (
    <section className={'techs'}>
      <div className={'techs__content'}>
        <p className={'techs__header'}>{resources_ru.techs}</p>
        <hr />
        <div className={'techs__info'}>
          <h2 className={'tech__info__title'}>{resources_ru.seven_techs}</h2>
          <p className={'techs__info__subtitle'}>{resources_ru.mastered_techs}</p>
        </div>
        <div className={'techs__list'}>
            <div className={'techs__list__item'}>HTML</div>
            <div className={'techs__list__item'}>CSS</div>
            <div className={'techs__list__item'}>JS</div>
            <div className={'techs__list__item'}>React</div>
            <div className={'techs__list__item'}>Git</div>
            <div className={'techs__list__item'}>Express.js</div>
            <div className={'techs__list__item'}>mongoDB</div>
          </div>
      </div>
    </section>
  );
};

export default Techs;