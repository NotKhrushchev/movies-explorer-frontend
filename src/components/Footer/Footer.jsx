import React from 'react';
import './Footer.css';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/Link/Link';

const Footer = ({ isVisible} ) => {
  
  return (
    <footer className={`footer ${!isVisible && 'hidden'}`}>
      <div className={'footer__content'}>
        <h3 className={'footer__title'}>{resources_ru.stud_project}</h3>
        <hr />
        <div className={'footer__info'}>
          <p className={'footer__info__year'}>© 2023</p>
          <div className={'footer__info__links'}>
            <Link 
              addtlClass={'footer__info__links__link'} 
              wayTo={'https://practicum.yandex.ru/'} 
              title={resources_ru.yandex_pr}
            />
            <Link 
              addtlClass={'footer__info__links__link'} 
              wayTo={'https://github.com/NotKhrushchev'}
              title={'Github'}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;