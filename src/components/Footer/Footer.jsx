import React from 'react';
import './Footer.css'
import { resources_ru } from '../../translations/resources_ru';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer__content'}>
        <h3 className={'footer__title'}>{resources_ru.stud_project}</h3>
        <hr />
        <div className={'footer__info'}>
          <p className={'footer__info__year'}>© 2023</p>
          <div className={'footer__info__links'}>
            <a 
              className={'footer__info__links__link'} 
              href={'https://practicum.yandex.ru/'} 
              target={'_blank'} 
              rel={'noreferrer'}
            >{resources_ru.yandex_pr}</a>
            <a 
              className={'footer__info__links__link'} 
              href={'https://github.com/NotKhrushchev'}
              target={'_blank'} 
              rel={'noreferrer'}
            >Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;