import React from 'react';
import './AboutProject.css';
import { resources_ru } from '../../../translations/resources_ru';

const AboutProject = () => {
  
  return (
    <section className={'about-project'}>
      <div className={'about-project__content'}>
        <p className={'about-project__header'}>{resources_ru.about_project}</p>
        <section className={'about-project__info'}>
          <div className={'about-project__about'}>
            <h2 className={'about-project__about-title'}>{resources_ru.diploma_stages}</h2>
            <p className={'about-project__about-subtitle'}>{resources_ru.diploma_stages_info}</p>
          </div>
          <div className={'about-project__about'}>
            <h2 className={'about-project__about-title'}>{resources_ru.diploma_weeks}</h2>
            <p className={'about-project__about-subtitle'}>{resources_ru.diploma_weeks_info}</p>
          </div>
        </section>
        <section className={'about-project__progress'}>
          <div className={'about-project__progress-back'}>
            <p className={'about-project__progress-text about-project__progress-text_back'}>{resources_ru.one_week}</p>
            <p className={'about-project__progress-subtext'}>Back-end</p>
          </div>
          <div className={'about-project__progress-front'}>
            <p className={'about-project__progress-text about-project__progress-text_front'}>{resources_ru.four_weeks}</p>
            <p className={'about-project__progress-subtext'}>Front-end</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutProject;