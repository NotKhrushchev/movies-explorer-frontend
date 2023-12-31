import React from 'react';
import './AboutMe.css';
import { resources_ru } from '../../../translations/resources_ru';
import LinkIcon from '../../../images/icons/link-icon.svg';
import Link from '../../ui/Link/Link';

const AboutMe = ({ portfolioItems = [] }) => {
  
  return (
    <section className={'about-me'} id='me'>
      <div className={'about-me__content'}>
        <p className={'about-me__header'}>{resources_ru.student}</p>
        <hr />
        <div className={'about-me__info'}>
          <article className={'about-me__text'}>
            <h2 className={'about-me__text__title'}>{resources_ru.student_name}</h2>
            <h3 className={'about-me__text__subtitle'}>{resources_ru.profession_age}</h3>
            <p className={'about-me__text__about'}>{resources_ru.about_me}</p>
            <Link 
              addtlClass={'about-me__text__gh-link'} 
              wayTo={'https://github.com/NotKhrushchev'} 
              title={'Github'}
            />
          </article>
          <div className={'about-me__photo'} />
        </div>
        <div className={'about-me__portfolio'}>
          <p className={'about-me__portfolio__title'}>{resources_ru.portfolio}</p>
          <ul className={'about-me__portfolio__list'}>
            {portfolioItems.map((item, index) => 
              <li className={'about-me__portfolio__list__item'} key={index}>
                <Link 
                  addtlClass={'about-me__portfolio__list__item__link'} 
                  wayTo={item.wayTo}
                  title={item.title}
                />
                <img src={LinkIcon} alt={resources_ru.link_icon} className={'about-me__portfolio__list__item__icon'} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;