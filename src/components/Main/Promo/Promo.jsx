import React from 'react';
import './Promo.css'
import { resources_ru } from '../../../translations/resources_ru';
import promoPicture from '../../../images/promo-picture.svg';
import FindOutBtn from '../../ui/buttons/FindOutBtn/FindOutBtn';

const Promo = () => {
  return (
    <section className={'promo'}>
      <div className={'promo__info'}>
        <h1 className={'promo__info__title'}>{resources_ru.promo_title}</h1>
        <p className={'promo__info__subtitle'}>{resources_ru.promo_subtitle}</p>
        <FindOutBtn btnBEMRelate={'promo__info__find-out-btn'} moveTo={'#me'} />
      </div>
      <img src={promoPicture} className={'promo__picture'} alt={resources_ru.globe} draggable={false} />
    </section>
  );
};

export default Promo;