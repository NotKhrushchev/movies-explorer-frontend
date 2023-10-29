import React from 'react';
import './AboutMe.css';
import { resources_ru } from '../../../translations/resources_ru';
import LinkIcon from '../../../images/icons/link-icon.svg';
import Link from '../../ui/Link/Link';
import MyPhoto from '../../../images/about-me-photo.jpg';

const AboutMe = ({ portfolioItems = [] }) => {
  
  return (
    <section className={'about-me'} id={'me'}>
      <div className={'about-me__content'}>
        <h2 className={'about-me__header'}>{resources_ru.student}</h2>
        <div className={'about-me__info'}>
          <article className={'about-me__text'}>
            <h3 className={'about-me__text-title'}>{resources_ru.student_name}</h3>
            <h4 className={'about-me__text-subtitle'}>{resources_ru.profession_age}</h4>
            <p className={'about-me__text-about'}>{resources_ru.about_me}</p>
            <Link 
              className={'about-me__text-gh-link'} 
              wayTo={'https://github.com/NotKhrushchev'} 
              title={'Github'}
            />
          </article>
          <img src={MyPhoto} alt={resources_ru.my_photo} className={'about-me__photo'} draggable={false} />
        </div>
        <div className={'about-me__portfolio'}>
          {portfolioItems && <p className={'about-me__portfolio-title'}>{resources_ru.portfolio}</p>}
          <ul className={'about-me__portfolio-list'}>
            {portfolioItems.map((item, index) => 
              <li className={'about-me__portfolio-list-item'} key={index}>
                <Link 
                  className={'about-me__portfolio-list-item-link'} 
                  wayTo={item.wayTo}
                  title={item.title}
                >
                  <img src={LinkIcon} alt={resources_ru.link_icon} className={'about-me__portfolio-list-item-icon'} draggable={false} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;