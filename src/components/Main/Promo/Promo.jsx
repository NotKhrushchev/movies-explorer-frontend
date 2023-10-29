import React from 'react';
import './Promo.css';
import { resources_ru } from '../../../translations/resources_ru';
import promoPicture from '../../../images/promo-picture.svg';
import FindOutBtn from '../../ui/buttons/FindOutBtn/FindOutBtn';

const Promo = () => {
  
  return (
    <section className={'promo'}>
      <div className={'promo__content'}>
        <div className={'promo__info'}>
          <h1 className={'promo__title'}>{resources_ru.promo_title}</h1>
          <p className={'promo__subtitle'}>{resources_ru.promo_subtitle}</p>
          <FindOutBtn className={'promo__find-out-btn'} />
        </div>
        <img src={promoPicture} className={'promo__picture'} alt={resources_ru.globe} draggable={false} />
      </div>
    </section>
  );
};

export default Promo;