import React from 'react';
import './AboutProject.css'
import { resources_ru } from '../../../translations/resources_ru';

const AboutProject = () => {
  return (
    <section className={'about-project'}>
      <div className={'about-project__content'}>
        <p className={'about-project__content__header'}>{resources_ru.about_project}</p>
        <hr />
        <section className={'about-project__content__info'}>
          <div className={'about-project__content__info__about'}>
            <h2 className={'about-project__content__info__about__title'}>{resources_ru.diploma_stages}</h2>
            <p className={'about-project__content__info__about__subtitle'}>{resources_ru.diploma_stages_info}</p>
          </div>
          <div className={'about-project__content__info__about'}>
            <h2 className={'about-project__content__info__about__title'}>{resources_ru.diploma_weeks}</h2>
            <p className={'about-project__content__info__about__subtitle'}>{resources_ru.diploma_weeks_info}</p>
          </div>
        </section>
        <section className={'about-project__content__progress'}>
          <div className={'about-project__content__progress__back'}>
            <p className={'about-project__content__progress__text progress__back__text'}>{resources_ru.one_week}</p>
            <p className={'about-project__content__progress__subtext'}>Back-end</p>
          </div>
          <div className={'about-project__content__progress__front'}>
            <p className={'about-project__content__progress__text progress__front__text'}>{resources_ru.four_weeks}</p>
            <p className={'about-project__content__progress__subtext'}>Front-end</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutProject;